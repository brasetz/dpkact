import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Use modern JavaScript for faster builds
    minify: 'esbuild', // Fast minification
    sourcemap: false, // Disable source maps in production
    chunkSizeWarningLimit: 500, // Adjust chunk size warning limit if needed
  },
});
