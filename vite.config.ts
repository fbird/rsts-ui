import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import http from 'http'

export default defineConfig({
  build: {
    minify: true
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    hmr: true,
    port: 9999,
    host: '0.0.0.0',
    open: false,
    cors: true,
    proxy: {
      '/rsts-api': {
        target: 'http://185.143.220.249:18080',
        // target: 'http://localhost:18080',
        changeOrigin: true,
        agent: new http.Agent() // 加这一行
      }
    }
  },
  
})
