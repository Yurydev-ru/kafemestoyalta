import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: false,
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: [
        "/",
        "/menu",
        "/category/myaso",
        "/category/fastfood",
        "/category/drinks",
        "/category/rolls",
        "/category/rolls/cold",
        "/category/rolls/fried",
        "/category/rolls/sets",
        "/category/rolls/all",
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteName: "Kafe Mesto",
    },
  },

  app: {
    head: {
      title: "Кафе Место",
      titleTemplate: "%s | Кафе Место",
      meta: [{ name: "description", content: "Лаундж кафе в центре Ялты" }],
      //   link: [
      //     { rel: "icon", href: "/favicon.ico" },
      //     { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      //   ],
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  alias: {
    "@": fileURLToPath(new URL("./app", import.meta.url)),
    "@app": fileURLToPath(new URL("./app", import.meta.url)),
    "@components": fileURLToPath(new URL("./app/components", import.meta.url)),
    "@ui": fileURLToPath(new URL("./app/components/ui", import.meta.url)),
    "@layout": fileURLToPath(
      new URL("./app/components/layout", import.meta.url),
    ),
    "@feature": fileURLToPath(
      new URL("./app/components/feature", import.meta.url),
    ),
    "@composables": fileURLToPath(
      new URL("./app/composables", import.meta.url),
    ),
    "@utils": fileURLToPath(new URL("./app/utils", import.meta.url)),
    "@types": fileURLToPath(new URL("./app/types", import.meta.url)),
    "@assets": fileURLToPath(new URL("./app/assets", import.meta.url)),
    "~/": fileURLToPath(new URL("./app", import.meta.url)),
    "@/": fileURLToPath(new URL("./app", import.meta.url)),
  },
  css: ["@assets/scss/main.scss"],

  modules: ["@nuxt/icon", "@nuxt/eslint"],

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
          @use "@assets/scss/tokens" as *;
          @use "@assets/scss/abstracts" as *;
          
          `,
        },
      },
    },
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  compatibilityDate: "2025-07-15",
});
