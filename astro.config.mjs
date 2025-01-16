// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  i18n: {
      defaultLocale: 'en',
      locales: ['ar', 'en'],
  },

  adapter: netlify()
});