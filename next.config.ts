import type { NextConfig } from "next";

const nextConfig: NextConfig = {
async rewrites() {
    return [
      {
        // Ubah destination ke port 5000
        source: '/api/chat',
        destination: 'http://127.0.0.1:5000/chat', 
      },
      {
        source: '/api/reset',
        destination: 'http://127.0.0.1:5000/reset',
      },
    ];
  },
};

export default nextConfig;
