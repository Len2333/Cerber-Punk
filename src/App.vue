<!-- src/App.vue -->
<template>
  <div class="cyberpunk-main">
    <!-- 导航菜单 -->
    <nav class="glowing-nav">
      <router-link 
        v-for="item in menuItems" 
        :key="item.path"
        :to="item.path"
        class="hologram-button"
      >
        {{ item.name }}
      </router-link>
    </nav>

    <!-- 路由视图容器 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuItems = ref([
  { name: 'Load', path: '/life-load' },
  { name: 'New', path: '/new-start' },
  { name: 'other', path: '/honor-wall' }
])
</script>

<style scoped>
.glowing-nav {
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  border-bottom: 2px solid #0ff;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.hologram-button {
  /* 添加赛博朋克风格按钮样式 */
  border: 1px solid #0ff;
  background: linear-gradient(45deg, #001111, #003333);
  color: #0ff;
  margin: 0 1rem;
  padding: 0.8rem 2rem;
  position: relative;
  overflow: hidden;
}

.hologram-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(0, 255, 255, 0.2),
    transparent
  );
  transform: rotate(45deg);
}
</style>