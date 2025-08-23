import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Optionally expose your site URL to the app
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default nextConfig;
