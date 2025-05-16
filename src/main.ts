import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'swiper/css';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app') // 挂载到 public/index.html 的 <div id="app"></div>