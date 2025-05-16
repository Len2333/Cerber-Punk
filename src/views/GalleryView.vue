<template>
  <div class="cyberpunk-content">
    <h1 class="neon-title">赛博朋克图库</h1>
    <div class="gallery-grid">
      <router-link 
        v-for="(item, index) in galleryItems" 
        :key="index"
        :to="{ name: item.routeName }"
        class="gallery-item"
      >
        <div class="item-title">{{ item.title }}</div>
      </router-link>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface GalleryItem {
  title: string
  routeName: string
}

const galleryItems = ref<GalleryItem[]>([
  { 
    title: '夜之城', 
    routeName: 'night-city'
  },
  { 
    title: '义体改造', 
    routeName: 'cyberware'
  },
  { 
    title: '黑客帝国', 
    routeName: 'matrix'
  }
])
</script>

<style scoped>
.cyberpunk-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.neon-title {
  color: #f0f;
  text-shadow: 0 0 10px #f0f;
  text-align: center;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.gallery-item {
  border: 1px solid #0ff;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.gallery-item:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 10px #0ff;
}

.item-title {
  color: #0ff;
  text-align: center;
}

.item-detail {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #f0f;
}

.neon-text {
  color: #f0f;
  text-shadow: 0 0 5px #f0f;
}

.description {
  color: #0ff;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
