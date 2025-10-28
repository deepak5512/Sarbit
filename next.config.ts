import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "i.imgur.com",
      },
    ],
  },
};

export default nextConfig;
