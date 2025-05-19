import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // rollupOptions: {
    //   input: './public/index.html'
    // }
  },
  server: {
    port: 3000,
    host: true,
    open: false,
    strictPort: true,
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:3000',
    //     rewrite: (path) => '/index.html'
    //   }
    // }
  },
  base: './',  //   这个会影响 Vite 的路径解析规则。默认为 '/'，以绝对路径解析，'./'代表以相对路径解析
})
