<template>
  <header>
    <div class="container">
      <div class="Logo-container">
        <img src="/public/Logo.png" alt="Logo" /> <!-- Logo占位 -->
      </div>

      <!-- 右侧导航菜单 -->
      <nav class="">
      </nav>
    </div>
  </header>
</template>

<script setup>
// 如果需要动态菜单，逻辑可以写在这里
</script>

<style scoped>
header {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: aquamarine;
  width: 100%;
  height: 100px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

.Logo-container {
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
}

.Logo-container img {
  max-width: 100%; 
  width: auto;
  height: 100%; 
  object-fit: contain; /* 保持比例并适配容器 */
}

</style>