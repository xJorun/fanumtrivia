import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Changed from 'server'
  site: 'https://yourusername.github.io',
  base: '/fanumtrivia', // Your repo name
});
