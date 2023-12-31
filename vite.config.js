import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = process.env.BASE_URL || '/';

export default defineConfig({
  plugins: [react()],
  base, // Set the base to '/'
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
