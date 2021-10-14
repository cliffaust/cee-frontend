export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cee',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        href:
          'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500&family=Mulish:wght@400;500;600;700&family=Old+Standard+TT:wght@400;700&family=Open+Sans:wght@400;600&family=Spectral:ital@1&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  router: {
    middleware: ['checkToken', 'addSaveListings'],
  },

  loading: { color: '#fca311', height: '2px', duration: 5000 },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/veeValidate.js',
    {
      src: '~/plugins/swiper.js',
      mode: 'client',
    },
    {
      src: '~/plugins/vueClipboard.js',
      mode: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    'nuxt-vite',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  env: {
    baseUrl:
      process.env.BASE_URL || 'https://cee-test-project.herokuapp.com/api/v1',
  },
}
