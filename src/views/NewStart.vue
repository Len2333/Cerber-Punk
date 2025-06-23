<template>
  <div class="new-start">
    <h1 class="title">新的开始</h1>

    <div class="content-section">
      <p>2024年5月1日，通过市局遴选到网安支队三大队工作。</p>
    </div>

    <div class="carousel-section">
      <h2 class="carousel-title">工作瞬间</h2>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div 
            class="swiper-slide" 
            v-for="(slide, index) in slides" 
            :key="index"
            :style="{ backgroundImage: `url(${slide.img})` }"
          ></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 幻灯片数据 - 使用更符合主题的网安相关图片
const slides = ref([
  { id: 1, img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80' },
  { id: 2, img: 'https://images.unsplash.com/photo-1563014959-7aaa83350992?auto=format&fit=crop&w=800&q=80' },
  { id: 3, img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80' },
  { id: 4, img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80' }
])

onMounted(() => {
  new Swiper('.swiper-container', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
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
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
  border-radius: 16px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(0, 195, 255, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.new-start::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00b4db, #0083b0, #00b4db);
  box-shadow: 0 0 15px rgba(0, 180, 219, 0.7);
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #00f3ff;
  text-shadow: 
    0 0 10px rgba(0, 195, 255, 0.5),
    0 0 20px rgba(0, 140, 255, 0.3);
  position: relative;
  padding-bottom: 0.5rem;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #00f3ff, transparent);
}

.content-section {
  background: rgba(10, 25, 47, 0.7);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid rgba(0, 195, 255, 0.3);
  box-shadow: 
    0 0 20px rgba(0, 195, 255, 0.2),
    inset 0 0 10px rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.content-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #e0f7fa;
  text-align: center;
  margin: 0;
}

.carousel-section {
  margin-top: 3rem;
  border-radius: 16px;
  overflow: hidden;
}

.carousel-title {
  text-align: center;
  color: #00f3ff;
  text-shadow: 0 0 10px rgba(0, 195, 255, 0.5);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.swiper-container {
  width: 100%;
  height: 500px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(0, 195, 255, 0.3);
  position: relative;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
  position: relative;
}

.swiper-pagination {
  position: absolute;
  bottom: 20px !important;
}

.swiper-pagination-bullet {
  background: #00f3ff;
  opacity: 0.6;
  width: 12px;
  height: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px rgba(0, 195, 255, 0.5);
}

.swiper-pagination-bullet-active {
  opacity: 1;
  background: #00ffaa;
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(0, 255, 170, 0.8);
}

.swiper-button-prev,
.swiper-button-next {
  color: #00f3ff !important;
  background: rgba(10, 25, 47, 0.7);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(0, 195, 255, 0.5);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 15px rgba(0, 195, 255, 0.3);
  transition: all 0.3s ease;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: rgba(0, 195, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 195, 255, 0.5);
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 1.5rem !important;
  font-weight: bold;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .new-start {
    padding: 1rem;
    margin: 1rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .swiper-container {
    height: 300px;
  }
  
  .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
  }
}
</style>