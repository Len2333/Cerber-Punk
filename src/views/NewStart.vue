<template>
  <div class="new-start">
    <h1>新的开始</h1>
    <div class="content-section">
      <p>这里是新的开始的内容描述，由用户提供具体文本。</p>
    </div>
    <div class="carousel-section">
      <h2>相关图片展示</h2>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">新开始图片1</div>
          <div class="swiper-slide">新开始图片2</div>
          <div class="swiper-slide">新开始图片3</div>
          <div class="swiper-slide">新开始图片4</div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'

onMounted(() => {
  new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
})
</script>

<style scoped>
.new-start {
  padding: 2rem;
  color: #0ff;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.1);
}

.new-start h1 {
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  margin-bottom: 1.5rem;
}

.content-section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 10px rgba(0, 255, 255, 0.1);
}

.carousel-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.swiper-container {
  width: 100%;
  height: 300px;
  margin-top: 1rem;
  border-radius: 6px;
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  color: #0ff;
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 4px;
  padding: 1rem;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.swiper-slide:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: scale(1.02);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.swiper-pagination {
  position: relative;
  margin-top: 1rem;
}

.swiper-button-prev,
.swiper-button-next {
  color: #0ff;
  background: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .swiper-container {
    height: 250px;
  }
}
</style>
