import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      title: '我的 Nuxt 项目',
    },
  },

  css: [
    '~/assets/css/main.css', // 其他需要保留的全局样式
    'element-plus/dist/index.css', // 引入 Element Plus 样式
  ],

  build: {
    transpile: ['element-plus'], // 确保 Element Plus 被正确转译
  },

  postcss: {
    plugins: {
      autoprefixer: {}, // 仅保留自动前缀
    },
  },
});