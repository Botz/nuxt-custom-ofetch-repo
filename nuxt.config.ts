// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '**': {
      swr: 60,
      cache: {
        maxAge: 60,
      }
    }
  }
})
