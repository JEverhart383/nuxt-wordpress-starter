// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/devtools',
        '@nuxtjs/tailwindcss' 
    ],
    runtimeConfig: {
        public: {
            wordpressUrl: 'https://acfheadless.wpengine.com/graphql'
        },
        private: {
          FAUST_SECRET_KEY: process.env.FAUST_SECRET_KEY
        }
    }
})


