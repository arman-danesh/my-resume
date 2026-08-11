import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Add this to ensure the out directory is created
  distDir: 'out', // This tells Next.js to output to 'out' instead of '.next'
};

export default nextConfig;