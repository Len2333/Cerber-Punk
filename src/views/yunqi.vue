<template>
  <div class="yunqi-container">
    <router-link to="/life-load" class="yunqi-back">返回</router-link>
    <div class="yunqi-page">
      <h1>云旗系</h1>
      
      <!-- 简要案情模块 -->
      <section class="case-section">
        <h2 class="section-title">云旗案犯罪团伙打着“新零售、大健康、免费吃保健品”的诱人旗号，搭建“云旗系”APP。他们以低价销售保健品为幌子，实则以吸引客户在平台上参与商品拍卖转售、抽取高额手续费攫取非法利益。同时，该团伙设置“团队达量奖”、“直推奖”等极具诱惑力的层级奖励机制，通过专职讲师推广，在短时间内迅速席卷常州并辐射全国。至案发时，该团伙已在全国设立43个分公司，发展会员近3万人，涉案金额高达41亿余元。</h2>
        <div class="section-content">
          <!-- 案件时间线/背景描述 -->
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

const difficults = reactive([
  {title:'案件定性之困？',path:'/yunqi/qualify' ,id:'111' },
  {title:'数据迷宫之困？',path:'/yunqi/collect',id:'222'},
  {title:'协同攻坚之困',path:'/yunqi/thoughts',id:'333'},
])
</script>

<style scoped>
/* 基础样式 */
:root {
  --main-bg: #1a1a1a;
  --card-bg: #2a2a2a;
  --text-color: #f0f0f0;
  --accent-color: #00cfcf;
  --hover-accent: #00aaff;
  --border-color: #444;
}

/* 页面容器 */
.yunqi-container {
  background: var(--main-bg);
  color: var(--text-color);
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* 返回按钮 */
.yunqi-back {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  backdrop-filter: blur(5px);
}

.yunqi-back:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(0, 204, 204, 0.3);
}

/* 主体内容 */
.yunqi-page {
  max-width: 1000px;
  margin: 0 auto;
}

/* 模块基础样式 */
.case-section, .challenge-section, .router-view-section {
  background: var(--card-bg);
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 标题样式 */
.section-title {
  color: var(--accent-color);
  font-size: 1.8rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* 案情描述段落 */
.case-section h2 {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ccc;
}

/* 卡片布局 */
.challenge-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
}

.card {
  background: #333;
  border-radius: 8px;
  padding: 1.5rem;
  flex: 1 1 calc(33% - 2rem);
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  text-align: center;
  min-width: 280px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 204, 204, 0.2);
  background: #444;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.card-title {
  color: var(--accent-color);
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  background: rgba(0, 204, 204, 0.2);
  border-radius: 6px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.card-title:hover {
  color: var(--hover-accent);
  background: rgba(0, 204, 204, 0.3);
  text-decoration: none;
}

/* 子路由展示区 */
.router-view-section {
  background: #2a2a2a;
  border-radius: 10px;
  padding: 2rem;
  min-height: 400px;
  overflow-y: auto;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .card {
    flex: 1 1 100%;
    min-width: 100%;
  }
}
</style>