// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get origin for response headers
  const origin = request.headers.get("origin") || "";
  const allowedOrigins = ['https://served.net.au', 'https://www.served.net.au', 'https://servednetau.vercel.app'];
  
  // Handle preflight requests (OPTIONS)
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept, Origin, X-Requested-With',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }

  // Handle actual request
  const response = NextResponse.next();
  
  // Add CORS headers to response
  response.headers.set('Access-Control-Allow-Origin', allowedOrigins.includes(origin) ? origin : '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Origin, X-Requested-With');
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  return response;
}

// Only run middleware on API routes
export const config = {
  matcher: '/api/:path*',
};