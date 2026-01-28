import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Esto arregla el error 400 en Netlify (imágenes locales)
    unoptimized: true,
    
    // Esto mantiene el permiso para las fotos de Diario Junio
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
