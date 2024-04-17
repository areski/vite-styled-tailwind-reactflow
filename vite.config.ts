import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import eslint from 'vite-plugin-eslint';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: '**/*.disabled',
  }), svgr()],
  root: resolve('./'),
  base: '/static/',
  server: {
    host: 'localhost',
    port: 4000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '*.md'],
  },
  build: {
    minify: false,
    cssCodeSplit: true,
    modulePreload: false,
  },
})
