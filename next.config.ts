import type { NextConfig } from "next";

const BACKEND_URL =
  process.env.API_BASE_URL ??
  "https://kainos-edge-be-production.up.railway.app/api/v1";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${BACKEND_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
