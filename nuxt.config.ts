import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  app: {
    head: {
      title: "Secure Digital",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Secure Digital - Protecting your digital presence and infrastructure.",
        },
        {
          name: "keywords",
          content:
            "cybersecurity, secure digital, digital protection, network security",
        },
        { name: "author", content: "Secure Digital" },
        { property: "og:title", content: "Secure Digital" },
        {
          property: "og:description",
          content:
            "Secure Digital - Protecting your digital presence and infrastructure.",
        },
        {
          property: "og:image",
          content: "https://hikvisionkenyashop.com/social-preview.jpg",
        },
        { property: "og:url", content: "https://hikvisionkenyashop.com" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Secure Digital" },
        {
          name: "twitter:description",
          content:
            "Secure Digital - Protecting your digital presence and infrastructure.",
        },
        {
          name: "twitter:image",
          content: "https://hikvisionkenyashop.com/social-preview.jpg",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png" },
        { rel: "canonical", href: "https://hikvisionkenyashop.com" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:4500/api",
    },
  },
  css: ["primeicons/primeicons.css", "@/assets/css/global.css"],
  plugins: [
    "~/plugins/axios",
    "~/plugins/initializeStore",
    "~/plugins/formatPrice.js",
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@primevue/nuxt-module",
    "@nuxtjs/sitemap", // ✅ Older sitemap module that works well
  ],
  sitemap: {
    hostname: "https://hikvisionkenyashop.com/",
    gzip: true,
    routes: ["/", "/profile", "/dashboard"],
  },
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
