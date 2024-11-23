/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://served.net.au/api/:path*',  // Update with actual API URL
        },
      ];
    },
    async headers() {
        return [
          {
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" }, // Or your specific domain
              { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
              { key: "Access-Control-Allow-Headers", value: "Content-Type,Accept" },
            ]
          }
        ];
      }
  };
  
  export default nextConfig;