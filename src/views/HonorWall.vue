<template>
  <div class="honor-wall">
    <!-- 存储型xss攻击输入测试模块 -->
    <div class="xss-test">
      <input v-model="xssInput" placeholder="输入任意内容">
      <button @click="addHonor">提交</button>
    </div>
    <!-- 反射型xss模块,动态渲染searchQuery -->
    <div v-if="searchQuery" v-html="searchQuery"></div>


    <div class="honor-display">
      <div class="honor-item" v-for="(item, index) in honors" :key="index">
        <h3 v-html="item.title"></h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const searchQuery = ref('')  // 定义一个空的查询参数

const route = useRoute();

watch(route, () => {
  /* 获取 hash 部分的查询参数，哈希模式取值法，和标准的history模式不一样，history 模式下，URL 形如 http://example.com/path?query=param，你可以直接使用 URLSearchParams 来解析查询参数
  传统模式可以这么写：
  const urlParams = new URLSearchParams(window.location.search);  //哈希模式下window.location.search 只会解析 # 之前的查询字符串（如果有的话）
  const queryValue = urlParams.get('query');
  */
  //window.location.hash.slice(1):去掉开头的 #(括号里的1代表从第二位开始取值)取后面的字符串，如path?query=param。
  //hashPart.split('?')：使用 ? 作为分隔符，将字符串分割成数组 [path, queryString]
  //[1] || ''取[path, queryString]数组里的第二位，也就是queryString（按上面的例子就是query=param），如果没有则返回空字符串。
  const hashParams = new URLSearchParams(window.location.hash.slice(1).split('?')[1] || '');
  //get('query')方法得到查询参数的值，注意参数名必须是query，否则会返回 null。
  const queryValue = hashParams.get('query');
  console.log('从URL获取的query参数值:', queryValue); // 明确输出原始值
  //使用 URLSearchParams 解析查询字符串部分。
  searchQuery.value = queryValue || '';
  console.log('赋值后的searchQuery.value:', searchQuery.value);
}, { immediate: true }); // immediate: true 确保初始化时也执行一次

const xssInput = ref('')
const honors = ref([
  { title: '荣誉1', description: '荣誉1描述' },
  { title: '荣誉2', description: '荣誉2描述' }
])

const addHonor = () => {
  if (xssInput.value) {
    honors.value.push({
      title: xssInput.value,
      description: xssInput.value
    })
    xssInput.value = ''
  }
}

interface HonorItem {
  title: string;
  description: string;
  image?: string;
}
</script>


<style scoped>
.honor-wall {
  padding: 3rem 2rem;
  color: #0ff;
  min-height: 100vh;
  position: relative;
}

/* 星空背景层 */
.honor-wall::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    #00001a 0%,
    #000033 40%,
    #00004d 80%,
    #000066 100%
  );
  z-index: -2;
}

/* 动态星点层 */
.honor-wall::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(1px 1px, #0ff 100%, transparent 0),
    radial-gradient(2px 2px, #0ff 100%, transparent 0),
    radial-gradient(1px 1px, #0ff 100%, transparent 0);
  background-size: 
    50px 50px,
    100px 100px,
    200px 200px;
  background-position: 
    0 0,
    25px 25px,
    50px 50px;
  z-index: -1;
  animation: twinkle 5s infinite ease-in-out;
  opacity: 0.3;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.content-section {
  margin-bottom: 3rem;
  padding: 2rem;
  border: 2px solid #0ff;
  border-radius: 12px;
  background: rgba(0, 255, 255, 0.05);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
  text-align: center;
}

.content-section p {
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.honor-display {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  perspective: 1000px;
}

.honor-item {
  position: relative;
  padding: 2rem;
  border: 2px solid #0ff;
  border-radius: 16px;
  background: linear-gradient(145deg, #0f0f23 0%, #1a1a3e 100%);
  box-shadow: 
    0 0 10px rgba(0, 255, 255, 0.2),
    0 0 30px rgba(0, 255, 255, 0.1) inset;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}

.honor-item:hover {
  transform: perspective(1000px) rotateY(5deg) rotateX(5deg) scale(1.02);
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.4),
    0 0 40px rgba(0, 255, 255, 0.2) inset;
  border-color: #00ffff;
}

.honor-item h3 {
  position: relative;
  color: #00ffff;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
}

.honor-item h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
}

.honor-item p {
  color: #e0f7fa;
  line-height: 1.6;
  font-size: 1rem;
}

.honor-image {
  margin-top: 1.5rem;
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.honor-image img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.honor-item:hover .honor-image img {
  transform: scale(1.05);
}

/* 添加光效元素 */
.honor-item::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%);
  transform: rotate(25deg);
  pointer-events: none;
  z-index: 0;
  opacity: 0.3;
  animation: glow 8s infinite ease-in-out;
}

@keyframes glow {
  0%, 100% { opacity: 0.3; transform: rotate(25deg) scale(1); }
  50% { opacity: 0.5; transform: rotate(25deg) scale(1.1); }
}

@media (max-width: 768px) {
  .honor-display {
    grid-template-columns: 1fr;
  }
  
  .honor-item {
    transform: none;
    border-radius: 12px;
  }
}
</style>