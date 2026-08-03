import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import http from 'http'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  build: {
    minify: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          fontawesome: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/vue-fontawesome'
          ]
        }
      }
    }
  },
  plugins: [
    vue(),
    Components({
      dirs: [],
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
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
        target: 'http://206.245.134.237:18080',
        // target: 'http://localhost:18080',
        changeOrigin: true,
        agent: new http.Agent() // 加这一行
      }
    }
  },
  
})
