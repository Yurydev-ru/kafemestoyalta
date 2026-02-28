import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  nitro: {
    compressPublicAssets: true,
  },
  alias: {
    "@ui": fileURLToPath(new URL("./components/ui", import.meta.url)),
    "@layout": fileURLToPath(new URL("./components/layout", import.meta.url)),
    "@feature": fileURLToPath(new URL("./components/feature", import.meta.url)),
  },
  css: ["~/assets/scss/main.scss"],
  modules: ["@nuxt/icon"],
  components: [
    {
      path: "~/components/layout",
      pathPrefix: false,
    },
    {
      path: "~/components/ui",
      pathPrefix: false,
    },
    {
      path: "~/components/feature",
      pathPrefix: false,
    },
  ],
  devServer: {
    host: "127.0.0.1",
    port: 3000,
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  icon: {
    provider: "iconify",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
          
          @use "@/assets/scss/tokens/colors";
          @use "@/assets/scss/abstracts/_mixins.scss" as *;
          `,
        },
      },
    },
  },
  compatibilityDate: "2025-07-15",
});
