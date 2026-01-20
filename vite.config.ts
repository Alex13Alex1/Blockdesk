import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use /Blockdesk/ for GitHub Pages, / for Vercel and other platforms
  // Vercel automatically sets VERCEL=1 during build
  // For GitHub Pages, we use /Blockdesk/ base path
  base: process.env.VERCEL || process.env.VITE_BASE_PATH === '/' ? '/' : (process.env.NODE_ENV === 'production' ? '/Blockdesk/' : '/'),
  publicDir: 'public',
});
