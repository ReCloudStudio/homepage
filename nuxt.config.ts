export default defineNuxtConfig({
  compatibilityDate: '2026-06-20',
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      title: 'ReCloud Studio',
      meta: [
        {
          name: 'description',
          content: 'We build open-source software. Fair, transparent, and community-driven.',
        },
        { property: 'og:title', content: 'ReCloud Studio' },
        {
          property: 'og:description',
          content: 'We build open-source software. Fair, transparent, and community-driven.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ReCloud Studio' },
        {
          name: 'twitter:description',
          content: 'We build open-source software. Fair, transparent, and community-driven.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'zh-CN', iso: 'zh-CN', file: 'zh-CN.json', name: '简体中文' },
    ],
    defaultLocale: 'zh-CN',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  googleFonts: {
    families: {
      Syne: [400, 500, 600, 700, 800],
      'DM Sans': [400, 500, 600, 700],
      'Noto Sans SC': [300, 400, 500, 600, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },
  nitro: {
    preset: 'cloudflare-pages',
  },
  vite: {
    optimizeDeps: {
      include: ['marked'],
    },
  },
})
