// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'cn', 'be'],
  }
});