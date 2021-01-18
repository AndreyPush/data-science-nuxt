const debug = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export default {
  mode: 'spa',
  /*
   ** Headers of the lesson
   */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'},
      {property: 'og:type', content: 'website'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700,700i&subset=cyrillic-ext'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&subset=cyrillic,cyrillic-ext'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},
  /*
   ** Global CSS
   */
  css: [
    '@/assets/sass/main.sass',
    // '~/node_modules/animate.css/animate.min.css' //import in libs or vendors
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {mode: 'client', src: '~/plugins/vue-youtube'},
    {mode: 'client', src: "~/plugins/fontawesome"},
    {mode: 'client', src: "~/plugins/virtual-scroller"},
    {mode: 'client', src: "~/plugins/vue-notifications"},
    {mode: 'client', src: '~/plugins/vue-scrollto'},
    {mode: 'client', src: '~/plugins/vue-jwplayer'},
    {mode: 'client', src: '~/plugins/utils-plugin'}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa'
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: '/',
    withCredentials: true,
    debug: debug
  },
  /*
   ** Build configuration
   */
  build: {
    extend (config) {
      config.resolve.alias['@cmp'] = '@@/components';
      config.resolve.alias['@imgs'] = '@@/assets/img';
      config.resolve.alias['@const'] = '@@/constants';
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    },
    analyze: debug,
    extractCSS: !debug,
    optimizeCSS: !debug,
    splitChunks: { layouts: true, pages: true },
    optimization: {
      minimize: !debug,
      splitChunks: {
        cacheGroups: {
          default: false,
          styles: {
            name: 'styles',
            test: /\.(css|scss|vue|sass)$/,
            chunks: 'all',
            enforce: true
          },
          common: {
            name: 'common',
            test: /[\\/]assets[\\/]sass[\\/]common\.sass/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
}
