/**
 * Next.js config
 * --------------
 * - output: "export" → static HTML for GitHub Pages
 * - images.unoptimized → required for static export
 * - trailingSlash → cleaner paths on static hosts
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
