import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2015',
    outDir: '../../dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    minify: 'esbuild',
    emptyOutDir: true,
    cssTarget: 'chrome83',
  }
})
