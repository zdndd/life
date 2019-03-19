import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import BaiduMap from 'vue-baidu-map'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import createRouter from './router/router'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(BaiduMap, {
  ak: 'hmMMZRFFjG18IIK4U4rRnCpSsIWXDbTb\n'
})


const router = new createRouter()

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
