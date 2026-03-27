import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gastronome.se',
  compressHTML: true,
  i18n: {
    locales: ['sv', 'en'],
    defaultLocale: 'sv',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sv',
        locales: { sv: 'sv-SE', en: 'en-GB' },
      },
    }),
  ],
  image: {
    domains: [],
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
