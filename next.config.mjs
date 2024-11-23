/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://served.net.au/api/:path*',
        },
      ];
    },
    async headers() {
        return [
          {
            // matching all API routes
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
              { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
              { key: "Access-Control-Max-Age", value: "86400" },
            ]
          }
        ]
      }
    };
  
  export default nextConfig;