import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rdbv87.github.io',
  base: '/tierraindia',
  vite: {
    plugins: [tailwindcss()]
  }
});
