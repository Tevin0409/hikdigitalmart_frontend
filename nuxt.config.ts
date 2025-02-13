import Aura from "@primevue/themes/aura";
import Lara from "@primevue/themes/lara";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Hk Secure ",
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' } // Your custom logo as favicon
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:4500/api",
    },
  },
  css: [
    "primeicons/primeicons.css", // PrimeIcons
    "@/assets/css/global.css",
  ],
  plugins: ["~/plugins/axios", "~/plugins/initializeStore", "~/plugins/formatPrice.js"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@primevue/nuxt-module",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: "light",
          cssLayer: false,
        },
      },
    },
  },
  compatibilityDate: "2024-12-03",
  devtools: { enabled: true },
});
