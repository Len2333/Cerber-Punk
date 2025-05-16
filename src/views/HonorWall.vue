<template>
  <div class="honor-wall">
    <h1>荣誉墙</h1>
    <div class="content-section">
      <p>这里展示荣誉墙内容，由用户提供具体信息</p>
    </div>
    <div class="honor-display">
      <div class="honor-item" v-for="(item, index) in honors" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="honor-image" v-if="item.image">
          <img :src="item.image" :alt="item.title">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface HonorItem {
  title: string;
  description: string;
  image?: string;
}

const honors: HonorItem[] = [
  {
    title: '荣誉1',
    description: '荣誉1描述'
  },
  {
    title: '荣誉2',
    description: '荣誉2描述'
  },
  {
    title: '荣誉3',
    description: '荣誉3描述'
  }
]
</script>

<style scoped>
.honor-wall {
  padding: 2rem;
  color: #0ff;
}

.content-section {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #0ff;
}

.honor-display {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.honor-item {
  padding: 1rem;
  border: 1px solid #0ff;
  border-radius: 4px;
}

.honor-item h3 {
  color: #0ff;
  margin-bottom: 0.5rem;
}

.honor-image {
  margin-top: 1rem;
  height: 150px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .honor-display {
    grid-template-columns: 1fr;
  }
}
</style>
