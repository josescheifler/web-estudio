import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.diariojunio.com.ar',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;