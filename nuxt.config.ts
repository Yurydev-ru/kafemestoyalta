// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  devServer: {
    host: '127.0.0.1',
    port: 3000
  },
  typescript: {
    strict: true,
    typeCheck: false
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
          @use "@/assets/scss/tokens" as *;
          `
        }
      }
    }
  },
  devtools: { 
    enabled: true
  },
  compatibilityDate: '2025-07-15',
})
