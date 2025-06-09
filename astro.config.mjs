import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    analytics: true,
    edgeMiddleware: false
  }),
  integrations: [],
  vite: {
    optimizeDeps: {
      exclude: ['firebase']
    }
  }
});
