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
        { property: 'og:url', content: 'https://worldexecute.me' },

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
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'zh', iso: 'zh-CN', file: 'zh-CN.json', name: '简体中文' },
    ],
    defaultLocale: 'zh',
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
      Syne: [400, 600, 700],
      'Noto Sans SC': [400, 500, 700],
    },
    display: 'swap',
  },
  ogImage: {
    zeroRuntime: true,
  },

  devServer: {
    host: '0.0.0.0',
  },
  nitro: {
    preset: 'cloudflare-module',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/projects',
        '/team',
        '/partners',
        '/conduct',
        '/team/rhencloud',
        '/en',
        '/en/projects',
        '/en/team',
        '/en/partners',
        '/en/conduct',
        '/en/team/rhencloud',
      ],
    },
  },
  vite: {
    optimizeDeps: {
      include: ['marked'],
    },
  },

})
