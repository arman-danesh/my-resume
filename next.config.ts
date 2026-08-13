/**
 * Next.js config — static export for Cloudflare Worker assets
 * ----------------------------------------------------------
 * - output: "export" → HTML/CSS/JS in out/
 * - images.unoptimized → required for static export
 * - trailingSlash → matches Worker html_handling
 * Do NOT set distDir to "out" (that would mix build cache with export).
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
