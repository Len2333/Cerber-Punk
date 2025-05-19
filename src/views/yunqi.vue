<template>
  <div class="yunqi-container">
    <router-link to="/life-load" class="yunqi-back">返回</router-link>
    <div class="yunqi-page">
      <h1>云栖页面</h1>
      <p>此处为后续填充内容</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.yunqi-page {
  padding: 2rem;
  color: #0ff;
}

.yunqi-back {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 4px;
  color: #0ff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.yunqi-back:hover {
  background: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
}
</style>