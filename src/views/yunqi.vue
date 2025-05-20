<template>
  <div class="yunqi-container">
    <router-link to="/life-load" class="yunqi-back">返回</router-link>
    <div class="yunqi-page">
      <h1>云旗系</h1>
      
      <!-- 简要案情模块 -->
      <section class="case-section">
        <h2 class="section-title">简要案情</h2>
        <div class="section-content">
          <!-- 案件时间线/背景描述 -->
          <p>此处填写案件基本情况...</p>
        </div>
      </section>

        <!-- 侦办难点模块 -->
      <section class="challenge-section">
        <h2 class="section-title">侦办难点</h2>
        <div class="challenge-cards">
          <!-- 定性难点卡片 -->
           <div class="card" v-for="difficult in difficults" :key="difficult.id">
            <div class="card-header">
              
              <router-link :to="difficult.path" class="card-title">{{difficult.title}}</router-link>
              
            </div>
          </div>
        </div>
      </section>
      <section class="router-view-section">
        <RouterView></RouterView>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { reactive } from 'vue';

const difficults = reactive([{title:'如何定性？',path:'/yunqi/qualify' ,id:'111' },
                   {title:'如何取证？',path:'/yunqi/collect',id:'222'},
                   {title:'一些思考？',path:'/yunqi/thoughts',id:'333'},
])
</script>


<style scoped>
/* 模块基础样式 */
.case-section, .challenge-section, .router-view-section {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(0, 255, 255, 0.05);
  border-radius: 8px;
}

.section-title {
  color: #0ff;
  border-bottom: 2px solid rgba(0, 255, 255, 0.3);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

/* 卡片布局样式 */
.challenge-cards {
  display: flex;
  justify-content: space-around; /* 或者使用 space-between */
  gap: 1.5rem;
}

.card {
  background: rgba(0, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 255, 255, 0.2);
  flex: 1; /* 使卡片均匀分布 */
  text-align: center; /* 文字居中 */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center; /* 内容居中 */
  margin-bottom: 1rem;
}

.card-title {
  color: #0ff;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem; /* 按钮内边距 */
  background: rgba(0, 255, 255, 0.2); /* 按钮背景色 */
  border-radius: 4px; /* 按钮圆角 */
}

.card-title:hover {
  color: #00ffff;
  text-decoration: underline;
  background: rgba(0, 255, 255, 0.3); /* 悬停时背景色变化 */
}

/* 子路由展示区样式 */
.router-view-section {
  min-height: 400px;
  max-height: 600px;
  overflow-y: auto;
  padding: 2rem;
  background: rgba(0, 255, 255, 0.1);
}

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