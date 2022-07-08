import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import swiper from '../components/home/swiper.vue'
import Artic from '../components/artic/artic.vue'
Vue.prototype.$router = Router
Vue.use(Router)

// 避免路由冗余
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/main',
      children: [
        {
          path: '/main',
          component: swiper
        }, {
          path: '/artic',
          component: Artic
        }
      ]
    }
  ]
})
