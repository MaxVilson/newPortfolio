
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device -width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/scss/style.scss'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/grid.scss',
      '@/assets/scss/variables.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  router: {
   
  },

  plugins: [
    
  ],

  generate: {
    // routes: ['/', '/about', '/ru', '/ru/about']
  },

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-svg-loader',
    '@nuxtjs/device',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Russia',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        },
      ],
      lazy: true,
      langDir: 'locales/',
      defaultLocale: 'en',
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
