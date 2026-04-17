// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  devServer: {
    host: '0.0.0.0',
    port: 9000
  },
  ui: { theme: { colors: ['primary', 'secondary', 'gray', 'info', 'success', 'warning', 'error'] },  colorMode: false },
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/device'],
  // image: {
  //   quality: 80,
  //   format: ['webp'],
  //   domains: [
  //     'admin.reachautoimport.com'
  //   ],
  //   alias: {
  //     unsplash: 'https://admin.reachautoimport.com'
  //   }
  // },
   colorMode: {
    preference: 'light', 
    fallback: 'light',    
    classSuffix: ''
  },
  css: ['~/assets/css/main.css'],
   app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // meta: [
      //   { property: 'og:site_name', content: 'rechautoimport' },
      //   { property: 'og:type', content: 'website' },
      //   { property: 'og:title', content: 'rechautoimport - Cars in Cambodia' },
      //   { property: 'og:description', content: 'Find premium cars in Cambodia with the best deals.' },
      //   { property: 'og:image', content: '/icons/logo.jpg' },
      //   { property: 'og:url', content: 'https://rechautoimport.com/' },
      // ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Siemreap&display=swap' },
        { rel: 'stylesheet', href: '/version1.0/fancybox/fancybox.css' }
      ],
      script: [
        { src: '/version1.0/plugin/plupload/plupload.full.min.js' },
        { src: '/version1.0/fancybox/fancybox.umd.js' },
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-FVFGNGMEEZ",
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FVFGNGMEEZ');
          `,
          type: "text/javascript"
        }
        // { src: '/plupload/plupload.full.min.js' },
      ]
    }
  },
  i18n: {
      defaultLocale: 'en',
      strategy: 'prefix_and_default',
      locales: [
        { "code": "en", "language": "en-US", "file": "en.json" },
        { "code": "km", "language": "km-KH", "file": "km.json" },
      ],
      bundle: { optimizeTranslationDirective: false }
  },
  runtimeConfig: {
    public: {
      api: {
        BASE_URL: 'https://admin.reachautoimport.com/ftd/api/v1/'
      }
    }
  },

  vite: {
    assetsInclude: ['**/*.webp'],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  },
})