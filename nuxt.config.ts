// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:["~/assets/scss/index.scss"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  ssr: false,
})