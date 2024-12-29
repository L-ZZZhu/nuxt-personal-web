<script setup lang="ts">
import { ref } from 'vue'; // 引入 Vue 的 API
import { useLifecycle } from './hooks/hooks';
import { useNuxtApp } from '#app'; // Nuxt 3 的全局上下文

// 定义 Vue 版本变量
const vueVersion = ref<string>('');

// 获取 Vue 版本并打印
useLifecycle({
  mounted() {
    try {
      const nuxtApp = useNuxtApp();
      vueVersion.value = nuxtApp.vueApp.version || '未知版本';
    } catch (error) {
      console.error('Error fetching Vue version:', error);
      vueVersion.value = '无法获取版本';
    }
  },
});

// 定义页面元数据
definePageMeta({
  layout: 'default',
});
</script>

<template>
  <NuxtLayout>
    <div>
      <h1 class="text-center text-2xl font-bold mt-4">Nuxt Vue 版本测试</h1>
      <p class="text-center mt-2">当前 Vue 版本: <strong>{{ vueVersion }}</strong></p>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style scoped>
</style>
