/**
 * @file Cloudflare Worker — static asset gateway for the Next.js export.
 *
 * Next.js builds a static site into `out/` (`output: "export"`).
 * This Worker serves those files through the `ASSETS` binding configured in
 * `wrangler.jsonc`. There is no SSR or API layer here.
 *
 * @module worker
 */

/**
 * @typedef {Object} Env
 * @property {Fetcher} ASSETS - Binding to the uploaded `out/` static directory
 */

export default {
  /**
   * Handle every incoming HTTP request by proxying to static assets.
   *
   * @param {Request} request - Incoming request
   * @param {Env} env - Worker bindings
   * @returns {Promise<Response>} Asset response from `out/`
   */
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
