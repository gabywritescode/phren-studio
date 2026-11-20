// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// While the site is previewed on GitHub Pages it lives at
// https://gabywritescode.github.io/phren-studio/ , so BASE is '/phren-studio'.
// When phrenstudio.com points here, change SITE_URL to 'https://www.phrenstudio.com'
// and BASE to '/'.
const SITE_URL = 'https://gabywritescode.github.io';
const BASE = '/phren-studio';

export default defineConfig({
  site: SITE_URL,
  base: BASE,

  integrations: [sitemap()],

  // Prefetches internal links on hover/viewport entry for near-instant navigation.
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },

  // Astro's built-in Fonts API: self-hosts and optimizes these at build time
  // (no Google-hosted requests, no extra npm packages, automatic preloading).
  // Each cssVariable below is consumed in src/styles/global.css inside the
  // Tailwind @theme block (--font-display, --font-body, --font-mono).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--ff-display',
      weights: ['400', '500', '600'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--ff-body',
      weights: ['400', '500', '600'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Space Mono',
      cssVariable: '--ff-mono',
      weights: ['400', '700'],
      subsets: ['latin'],
    },
  ],
});
