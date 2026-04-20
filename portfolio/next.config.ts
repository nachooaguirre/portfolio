import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Optionally expose your site URL to the app
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "api.iconify.design" },
    ],
  },
};

export default nextConfig;
