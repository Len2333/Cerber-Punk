<template>
  <div class="life-load">
    <h1 class="title">工作经历</h1>

    <!-- 新增文字展示区 -->
    <div class="content-section">
      <!-- 这里填入你的文字内容 -->
      <p>
        在这里撰写一段关于你工作经历的描述文字。可以放公司、职位、职责、项目亮点等。
      </p>
    </div>

    <div class="carousel-section">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay, A11y]"
        loop
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        navigation
        class="my-swiper"
      >
        <SwiperSlide v-for="(src, idx) in slides" :key="src.id">
          <img
            :src="src.img"
            loading="lazy"
            class="slide-image"
            :alt="`工作经历图${idx + 1}`"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const slides = [{img:img1,id:'sassas121'}, {img:img2,id:'sassas111'}, {img:img3,id:'sassas321'}, {img:img4,id:'sassas421'}];
const modules = [Navigation, Pagination, Autoplay, A11y];
</script>

<style scoped>
.life-load {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #0ff;
  font-family: 'Segoe UI', sans-serif;
}

.title {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
}
.title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: #0ff;
  margin: 0.5rem auto 0;
  border-radius: 2px;
}

.content-section {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.content-section p {
  margin: 0;
  color: #e0f7fa;
}

.carousel-section {
  margin-bottom: 3rem;
}

.my-swiper {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.my-swiper .swiper-slide {
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Swiper 控件颜色调整 */
.swiper-button-prev,
.swiper-button-next {
  color: #0ff;
}
.swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.6);
}
.swiper-pagination-bullet-active {
  background: #0ff;
}
</style>