/**
 * Resolve a public asset path relative to the Vite base URL.
 * Works both locally (`/`) and on GitHub Pages (`/cs_portfolio/`).
 */
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
