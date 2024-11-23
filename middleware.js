// middleware.js
import { NextResponse } from 'next/server';

// List of allowed origins
const allowedOrigins = [
  'https://served.net.au',
  'https://www.served.net.au',
  'https://servednetau.vercel.app' // Add your Vercel URL here
];

export function middleware(request) {
  // Get the origin from the request headers
  const origin = request.headers.get('origin');
  
  // Option 1: Allow known origins
  if (origin && allowedOrigins.includes(origin)) {
    // Return new response
    return NextResponse.next({
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // Option 2: Allow all origins
  return NextResponse.next({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}

// Configure middleware to run only for API routes
export const config = {
  matcher: '/api/:path*',
};