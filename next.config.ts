/**
 * Next.js config
 * --------------
 * - output: "export" → static HTML for GitHub Pages
 * - images.unoptimized → required for static export
 * - trailingSlash → cleaner paths on static hosts
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove "output: export"
  output: "standalone",  // For Cloudflare Workers
  images: {
    unoptimized: true,
  },
  // Remove trailingSlash or keep it
  trailingSlash: true,
};

export default nextConfig;