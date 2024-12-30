<template>
    <div class="flex flex-col min-h-screen">
      <Header /> <!-- 使用 Header 组件 -->
      <div class="flex flex-1">
        <main class="flex-1 p-4">
          <slot /> <!-- 嵌入页面内容 -->
        </main>
      </div>
      <Footer /> <!-- 使用 Footer 组件 -->
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'; // 引入组件
  import Footer from '../components/Footer.vue';
  </script>