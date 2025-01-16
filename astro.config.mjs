// @ts-check
import vercelAdapter from '@astrojs/vercel';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  i18n: {
      defaultLocale: 'en',
      locales: ['ar', 'en'],
  },
  adapter: vercelAdapter(),
});