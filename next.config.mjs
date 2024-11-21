/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
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


export default nextConfig;
