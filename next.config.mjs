/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove output: "export" if you want to use API routes
    images: {
        unoptimized: true,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/api/:path*',
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
                    { key: "Access-Control-Allow-Headers", value: "Content-Type" },
                ]
            }
        ];
    }
};

module.exports = nextConfig;