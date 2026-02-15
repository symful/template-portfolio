// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  srcDir: 'app',
  devtools: { enabled: true },

  imports: {
    dirs: ['composables', 'composables/**', 'types']
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  build: {
    transpile: ['gsap', 'three'],
  },

  app: {
    head: {
      title: 'Kemal Ardian | Full-Stack Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Full-Stack Software Engineer specializing in Flutter, TypeScript, and Go. Portfolio showcasing competitive programming achievements and high-scale applications.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Kemal Ardian | Full-Stack Software Engineer' },
        { property: 'og:description', content: 'Full-Stack Software Engineer Portfolio' },
        { property: 'og:image', content: '/assets/avatar.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/avatar.png' },
        // Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'cloudflare-pages'
  },

  typescript: {
    strict: true,
    typeCheck: true
  }
})
