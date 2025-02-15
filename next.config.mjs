/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'onyxcoffeelab.com',
          pathname: '/cdn/shop/files/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  