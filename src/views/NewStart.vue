<template>
  <div class="new-start">
    <h1 class="title">新的开始</h1>

    <div class="content-section">
      <p>2024年5月1日，通过市局遴选到网安支队三大队工作。在滴滴顺风车抢单外挂案、“思聊”跨境特大组织淫秽表演案、武进园区专案、天宁人社局短信通道引流案、“银联会议"APP诈骗案中发挥了自己的价值。将继续向身边优秀的人才们学习，早日在网安发挥出更大的作用。
      </p>
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
            @click="openLightbox(index)"
          ></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>

    <!-- 图片模态框 -->
    <div class="image-modal" :class="{ active: lightboxActive }" @click.self="closeLightbox">
      <div class="close-btn" @click="closeLightbox">
        <i class="fas fa-times"></i>
      </div>
      
      <div class="nav-btn prev-btn" @click="prevImage">
        <i class="fas fa-chevron-left"></i>
      </div>
      
      <div class="modal-content">
        <img :src="currentSlide.img" class="modal-image" alt="工作瞬间">
        <div class="image-info">
          <h3 class="image-title">工作瞬间 {{ currentSlideIndex + 1 }}/{{ slides.length }}</h3>
        </div>
      </div>
      
      <div class="nav-btn next-btn" @click="nextImage">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';

// 幻灯片数据
const slides = ref([
  { id: 1, img: img5 },
  { id: 2, img: img6 },
  { id: 3, img: img7 },
  { id: 4, img: img8 }
])

// 模态框状态
const lightboxActive = ref(false)
const currentSlideIndex = ref(0)
const currentSlide = ref(slides.value[0])

// 打开模态框
const openLightbox = (index: number) => {
  currentSlideIndex.value = index
  currentSlide.value = slides.value[index]
  lightboxActive.value = true
  document.body.style.overflow = 'hidden'
}

// 关闭模态框
const closeLightbox = () => {
  lightboxActive.value = false
  document.body.style.overflow = 'auto'
}

// 上一张图片
const prevImage = () => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length
  currentSlide.value = slides.value[currentSlideIndex.value]
}

// 下一张图片
const nextImage = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
  currentSlide.value = slides.value[currentSlideIndex.value]
}

// 键盘事件处理
const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxActive.value) return
  
  switch(e.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      prevImage()
      break
    case 'ArrowRight':
      nextImage()
      break
  }
}

onMounted(() => {
  // 初始化Swiper
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
  
  // 添加键盘事件监听
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  // 移除事件监听
  window.removeEventListener('keydown', handleKeydown)
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
  cursor: pointer;
  transition: transform 0.3s ease;
}

.swiper-slide:hover {
  transform: scale(1.02);
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

/* 图片模态框样式 */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 15, 30, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.image-modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-image {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow: 
    0 0 50px rgba(0, 195, 255, 0.3),
    0 0 100px rgba(0, 100, 255, 0.1);
  border: 2px solid rgba(0, 195, 255, 0.5);
  object-fit: contain;
}

.image-info {
  background: rgba(10, 25, 47, 0.8);
  border-radius: 8px;
  padding: 15px 20px;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  border: 1px solid rgba(0, 195, 255, 0.3);
  box-shadow: 0 0 20px rgba(0, 195, 255, 0.2);
}

.image-title {
  font-size: 1.5rem;
  color: #00f3ff;
  margin-bottom: 8px;
  text-shadow: 0 0 10px rgba(0, 195, 255, 0.5);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(10, 25, 47, 0.8);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(255, 0, 85, 0.5);
  box-shadow: 0 0 15px rgba(255, 0, 85, 0.3);
  transition: all 0.3s ease;
  z-index: 1001;
}

.close-btn:hover {
  background: rgba(255, 0, 85, 0.2);
  transform: rotate(90deg);
}

.close-btn i {
  font-size: 1.8rem;
  color: #ff0055;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(10, 25, 47, 0.8);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(0, 195, 255, 0.5);
  box-shadow: 0 0 20px rgba(0, 195, 255, 0.3);
  transition: all 0.3s ease;
  z-index: 1001;
}

.nav-btn:hover {
  background: rgba(0, 195, 255, 0.2);
}

.nav-btn i {
  font-size: 2rem;
  color: #00f3ff;
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
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
  
  .modal-image {
    max-width: 95vw;
    max-height: 60vh;
  }
  
  .nav-btn {
    width: 45px;
    height: 45px;
  }
  
  .image-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.7rem;
  }
  
  .carousel-title {
    font-size: 1.4rem;
  }
  
  .swiper-container {
    height: 250px;
  }
  
  .image-info {
    padding: 10px 15px;
  }
  
  .close-btn {
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
  }
  
  .nav-btn {
    width: 40px;
    height: 40px;
  }
}
</style>