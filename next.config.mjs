/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
    },
    // Remove the headers configuration since we're handling it in middleware
  };
  
  export default nextConfig;