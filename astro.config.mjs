import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    functionPerRoute: false,
    edgeMiddleware: false,
    imageService: true,
    devImageService: 'sharp'
  })
});
