import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import LifeLoad from '../views/LifeLoad.vue'
import NewStart from '../views/NewStart.vue'
import HonorWall from '../views/HonorWall.vue'
import Yunqi from '../views/Yunqi.vue'
import Qualify from '../views/qualify.vue'
import collect from '../views/collect.vue'
import thoughts from '../views/thoughts.vue'

const router = createRouter({
  history: createWebHashHistory(), // 使用 hash 模式
  routes: [
    {
      path: '/',
      component: App,
      children: [
        { path: '', redirect: '/life-load' },
        { path: '/life-load', component: LifeLoad },
        { path: '/new-start', component: NewStart },
        { path: '/honor-wall', component: HonorWall },
        { path: '/yunqi',component: Yunqi,
          children: [
            { path: 'qualify', component: Qualify },
            { path: 'collect', component: collect },
            { path: 'thoughts', component: thoughts },
          ],
        }
      ]
    }
  ]
})

export default router