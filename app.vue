<script setup lang="ts">
import { ref, onMounted } from 'vue'; // 引入 Vue 的 API
import { useNuxtApp } from '#app'; // Nuxt 3 的全局上下文

// 定义 Vue 版本变量
const vueVersion = ref<string>('');

// 获取 Vue 版本并打印
onMounted(() => {
  const nuxtApp = useNuxtApp(); // 获取 Nuxt 上下文
  vueVersion.value = nuxtApp.vueApp.version || '未知版本';
  console.log(`当前 Vue 版本: ${vueVersion.value}`);
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
/* 页面布局样式 */
</style>