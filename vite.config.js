import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
})