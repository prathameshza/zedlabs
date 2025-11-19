import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // or '/serverless' depending on your needs

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  adapter: vercel({
    analytics: true, // This enables both Web Analytics and Speed Insights
  }),

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});