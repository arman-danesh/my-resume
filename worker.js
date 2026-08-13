/**
 * Cloudflare Worker — static asset gateway
 * ----------------------------------------
 * Next.js builds a static site into `out/` (output: "export").
 * This Worker serves those files through the ASSETS binding.
 *
 * No SSR / API routes here — pure static portfolio hosting.
 */

export default {
  /**
   * @param {Request} request
   * @param {{ ASSETS: Fetcher }} env
   */
  async fetch(request, env) {
    // Serve files from the uploaded `out/` directory
    return env.ASSETS.fetch(request);
  },
};
