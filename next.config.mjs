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
          // Match all API routes
          source: "/api/:path*",
          headers: [
            { 
              key: "Access-Control-Allow-Credentials", 
              value: "true" 
            },
            { 
              key: "Access-Control-Allow-Origin", 
              value: "https://www.served.net.au" 
            },
            { 
              key: "Access-Control-Allow-Methods", 
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"
            },
            {
              key: "Access-Control-Allow-Headers",
              value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
            },
            {
              // Add this to handle preflight requests
              key: "Access-Control-Max-Age",
              value: "86400"
            }
          ]
        }
      ];
    }
  };
  
  export default nextConfig;