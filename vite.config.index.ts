import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  build: {
    outDir: 'dist-index',
    rollupOptions: {
      input: './index.html',
    }
  },
  plugins: [viteSingleFile()],
  base: './',
})
