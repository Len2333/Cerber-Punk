<template>
  <div class="qualify-page">
    
    <!-- 图片网格展示 -->
    <div class="image-grid">
      <div 
        v-for="(image, index) in images" 
        :key="index" 
        class="image-item"
        @click="openLightbox(index)"
      >
        <div class="image-placeholder">
          <div class="placeholder-content">
            <div class="placeholder-icon">📷</div>
            <div class="placeholder-text">图片 {{ index + 1 }}</div>
          </div>
        </div>
        <div class="image-overlay">
          <div class="zoom-icon">🔍</div>
        </div>
      </div>
    </div>
    
    <!-- 图片放大查看 -->
    <div v-if="lightboxVisible" class="lightbox" @click.self="closeLightbox">
      <div class="lightbox-content">
        <button class="lightbox-close" @click="closeLightbox">
          <span class="close-icon">×</span>
        </button>
        <div class="lightbox-image">
          <div class="placeholder-content large">
            <div class="placeholder-icon">🖼️</div>
            <div class="placeholder-text">大图展示 {{ lightboxIndex + 1 }}</div>
          </div>
        </div>
        <div class="lightbox-nav">
          <button @click="prevImage">
            <span class="nav-icon">◀</span>
          </button>
          <span>{{ lightboxIndex + 1 }} / {{ images.length }}</span>
          <button @click="nextImage">
            <span class="nav-icon">▶</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 图片数据（稍后从本地加载）
const images = ref([
  { alt: "图片1描述" },
  { alt: "图片2描述" },
  { alt: "图片3描述" },
  { alt: "图片4描述" }
]);

// 图片放大查看相关状态
const lightboxVisible = ref(false);
const lightboxIndex = ref(0);

// 打开图片查看器
const openLightbox = (index: number) => {
  lightboxIndex.value = index;
  lightboxVisible.value = true;
};

// 关闭图片查看器
const closeLightbox = () => {
  lightboxVisible.value = false;
};

// 切换到上一张图片
const prevImage = (e: Event) => {
  e.stopPropagation();
  lightboxIndex.value = (lightboxIndex.value - 1 + images.value.length) % images.value.length;
};

// 切换到下一张图片
const nextImage = (e: Event) => {
  e.stopPropagation();
  lightboxIndex.value = (lightboxIndex.value + 1) % images.value.length;
};
</script>

<style scoped>
.qualify-page {
  padding: 2rem;
  color: #0ff;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #001a1a, #003333);
  min-height: 100vh;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
  letter-spacing: 2px;
  background: linear-gradient(90deg, #0ff, #0af);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(0, 255, 255, 0.3);
}

/* 网格视图样式 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.image-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  aspect-ratio: 16/9;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(0, 30, 30, 0.6);
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.image-item:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 30px rgba(0, 255, 255, 0.3);
  border-color: rgba(0, 255, 255, 0.5);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #002b2b, #004444);
}

.placeholder-content {
  text-align: center;
  color: rgba(0, 255, 255, 0.7);
}

.placeholder-content.large {
  transform: scale(1.5);
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.placeholder-text {
  font-size: 1.3rem;
  font-weight: 500;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-item:hover .image-overlay {
  opacity: 1;
}

.zoom-icon {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.6);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.image-item:hover .zoom-icon {
  transform: scale(1.1);
  background: rgba(0, 100, 100, 0.8);
}

/* 图片放大查看样式 */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  width: 900px;
  background: rgba(0, 20, 20, 0.9);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 50px rgba(0, 255, 255, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.3);
}

.lightbox-image {
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #002b2b, #003333);
  border-radius: 10px;
  margin-bottom: 20px;
}

.lightbox-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 40, 40, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.5);
  color: #0ff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.lightbox-close:hover {
  background: rgba(0, 80, 80, 0.9);
  transform: rotate(90deg);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

.lightbox-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.lightbox-nav button {
  background: rgba(0, 40, 40, 0.8);
  border: 1px solid rgba(0, 255, 255, 0.5);
  color: #0ff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.lightbox-nav button:hover {
  background: rgba(0, 80, 80, 0.9);
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

.lightbox-nav span {
  color: #0ff;
  font-size: 1.3rem;
  min-width: 80px;
  text-align: center;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .lightbox-content {
    width: 90%;
    padding: 20px;
  }
  
  .lightbox-image {
    height: 50vh;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .image-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .lightbox-nav {
    gap: 15px;
  }
  
  .lightbox-nav button {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .qualify-page {
    padding: 1.5rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .placeholder-icon {
    font-size: 3rem;
  }
  
  .lightbox-image {
    height: 40vh;
  }
  
  .lightbox-content {
    padding: 15px;
  }
  
  .lightbox-nav span {
    font-size: 1.1rem;
  }
}
</style>