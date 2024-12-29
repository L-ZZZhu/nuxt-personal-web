import { defineNuxtConfig } from 'nuxt/config';



export default defineNuxtConfig({
  app: {
    head: {
      title: '我的 Nuxt 项目',
    },
  },

  css: [
    '~/assets/css/main.css', // 如果需要保留主样式
    'vuetify/styles', // 引入 Vuetify 样式
    '~/assets/css/tailwind.css', // 引入 Tailwind CSS 样式
  ],

  modules: ['@nuxtjs/tailwindcss'], // 添加 Tailwind 模块（可选）

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  compatibilityDate: '2024-12-28',
});