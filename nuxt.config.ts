import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: false,

  runtimeConfig: {
    public: {
      siteName: "Kafe Mesto",
    },
  },

  app: {
    head: {
      title: "Кафе Место",
      titleTemplate: "%s | Кафе Место",
      meta: [
        { name: "description", content: "Лаундж кафе в центре Амстердама" },
      ],
      //   link: [
      //     { rel: "icon", href: "/favicon.ico" },
      //     { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      //   ],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  ssr: false,
  runtimeConfig: {
    public: {
      siteName: "Kafe Mesto",
    },
  },
  app: {
    head: {
      title: "Кафе Место",
      titleTemplate: "%s | Кафе Место",
      meta: [
        { name: "description", content: "Лаундж кафе в центре Амстердама" },
      ],
      //   link: [
      //     { rel: "icon", href: "/favicon.ico" },
      //     { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      //   ],
    },
  },
  alias: {
    "@ui": fileURLToPath(new URL("./components/ui", import.meta.url)),
    "@layout": fileURLToPath(new URL("./components/layout", import.meta.url)),
    "@feature": fileURLToPath(new URL("./components/feature", import.meta.url)),
    "@assets": fileURLToPath(new URL("./assets", import.meta.url)),
    "@composables": fileURLToPath(new URL("./composables", import.meta.url)),
    "@utils": fileURLToPath(new URL("./utils", import.meta.url)),
    "@store": fileURLToPath(new URL("./store", import.meta.url)),
    "@pages": fileURLToPath(new URL("./pages", import.meta.url)),
    "@layouts": fileURLToPath(new URL("./layouts", import.meta.url)),
    "@components": fileURLToPath(new URL("./components", import.meta.url)),
    "@modules": fileURLToPath(new URL("./modules", import.meta.url)),
  },
  css: ["~/assets/scss/main.scss"],

  modules: ["@nuxt/icon"],

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
    cssSelectorPrefix: "i-",
    fetchTimeout: 1500,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
          @use "~/assets/scss/tokens/colors" as *;
          @use "~/assets/scss/abstracts/_mixins.scss" as *;
          `,
        },
      },
    },
  },
  compatibilityDate: "2025-07-15",
});
