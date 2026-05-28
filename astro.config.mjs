// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/prompts': '/iam/prompts',
    '/music': '/files/music',
    '/gallery': '/files/gallery',
    '/blog': '/files/blog',
    '/store': '/files/store',
    '/archive': '/files/archive',
    '/heartbeatideation': '/ben',
  }
});