# Root-level Dockerfile that builds the Next.js app located in ./portfolio

FROM node:20-alpine AS deps
WORKDIR /app/portfolio
COPY portfolio/package.json portfolio/package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM node:20-alpine AS builder
WORKDIR /app/portfolio
COPY --from=deps /app/portfolio/node_modules ./node_modules
COPY portfolio ./
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy standalone output from subdir
COPY --from=builder /app/portfolio/.next/standalone ./
COPY --from=builder /app/portfolio/.next/static ./.next/static
COPY --from=builder /app/portfolio/public ./public

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]

