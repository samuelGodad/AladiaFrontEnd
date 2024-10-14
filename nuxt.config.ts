import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["/assets/css/main.css"],
  alias: {
    "@": resolve(__dirname, "./src"),
    "@components": resolve(__dirname, "./src/components"), // Add this line
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/storybook", "@nuxt/ui", "@nuxtjs/tailwindcss"],

  vite: {
    build: {
      rollupOptions: {
        
      },
    },
  },
});