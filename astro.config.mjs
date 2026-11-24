// @ts-check
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Static multi-page build: every page ships as real HTML (best for SEO) and
// can be uploaded as-is to the existing cPanel host.
//
// `npm run build:demo` sets PUBLIC_DEMO=1 and builds a preview copy for
// GitHub Pages, which serves the site from a sub-folder.
const DEMO = process.env.PUBLIC_DEMO === '1';
export const DEMO_BASE = '/West-Coast-Roof-Care-website-demo';

export default defineConfig({
  site: DEMO ? 'https://rolandvtonder.github.io' : 'https://wcroofcare.co.za',
  base: DEMO ? DEMO_BASE : undefined,
  trailingSlash: 'always',
  build: {format: 'directory'},
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/'),
    }),
  ],
  vite: {plugins: [tailwindcss()]},
});
