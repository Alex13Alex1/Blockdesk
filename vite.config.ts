import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use /Blockdesk/ for GitHub Pages, / for Vercel and other platforms
  // Vercel sets VERCEL=1, GitHub Pages uses /Blockdesk/ base
  base: process.env.VERCEL ? '/' : (process.env.NODE_ENV === 'production' ? '/Blockdesk/' : '/'),
  publicDir: 'public',
});
