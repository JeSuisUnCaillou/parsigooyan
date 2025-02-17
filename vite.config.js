import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      workbox: { globPatterns: ['**/*.{js,css,html,ico,png,svg}'] },
      includeAssets: ['/logo_bouquetin_150x150.png'],
      manifest: {
        name: 'Parsigooyan',
        short_name: 'Parsigooyan',
        description: 'The only pocket dictionary of foreign words in Farsi',
        theme_color: '#363445',
        icons: [
          {
            src: '/logo_bouquetin_150x150.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo_bouquetin_150x150.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/style/variables.scss" as *;
        `
      }
    }
  }
})
