// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/dist/css/swiper.min.css'
import './assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.filter('dateFormate', function (time) {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1 + '').padStart(2, '0')
  const day = (date.getDay() + '').padStart(2, '0')
  return `${year}-${month}-${day}`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
