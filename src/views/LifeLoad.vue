<template>
  <div class="life-load">
    <h1 class="title">所队经历</h1>

    <!-- 新增文字展示区 -->
    <div class="content-section">
      <!-- 这里填入你的文字内容 -->
       <router-link to="/yunqi" class="clickable-content">
        <p>
        2018年8月入警到巡特警支队突击大队。2019年11月19日至新北分局河海派出所。2022年起，在所内担任警长，23年先后担任刑侦警组组长和值班长。主办案件类型广泛：从黄赌毒、盗抢骗、猥亵强奸等到掩隐、非吸、集资诈骗、挪用资金职务侵占等；22年时一人完成所里近半移诉指标，在手案件常年稳定10-14件，成功侦办过新北首个洗钱团伙、常州首例高空抛物刑事案件、首例“隔空猥亵”案等具有典型意义的案件，主办的多起案件也曾获得省部级领导的批示肯定，还曾被《常州日报》采访，赢得了群众的认可和组织的信任。
        </p>
      </router-link>
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
  object-fit: contain;
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

.clickable-content {
  display: block;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.clickable-content:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}
</style>