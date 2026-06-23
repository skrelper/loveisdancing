// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import generateFileLists from './scripts/generate-file-list.js';

function fileListGenerator() {
  return {
    name: 'file-list-generator',
    hooks: {
      'astro:build:start': async () => {
        console.log("Running generateFileLists...");
        await generateFileLists();
      }
    }
  };
}

export default defineConfig({
  integrations: [
    tailwind(),
    fileListGenerator()
  ],
  redirects: {
    '/prompts': '/iam/prompts',
    '/music': '/files/music',
    '/gallery': '/files/gallery',
    '/blog': '/files/blog',
    '/heartbeatideation': '/ben',
  }
});
