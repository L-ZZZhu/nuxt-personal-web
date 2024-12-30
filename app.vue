<script setup lang="ts">
import { ref } from 'vue'; // 引入 Vue 的 API
import { useLifecycle } from './hooks/hooks';
import { useNuxtApp } from '#app'; // Nuxt 3 的全局上下文
</script>

<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Londrina+Shadow&display=swap');
</style>
