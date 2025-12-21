import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'salty-order.net',
      },
      {
        protocol: 'https',
        hostname: 'oval-dress.org',
      },
      {
        protocol: 'https',
        hostname: 'scratchy-request.net',
      },

    ],
  },
};

export default nextConfig;
