// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    'nuxt-icon'
  ],
  image: {
    // Options
  },
  app: {
    pageTransition: { name: 'page', mode: 'in-out' }
  },

});
