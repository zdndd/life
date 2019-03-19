import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import createRouter from './router/router'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new createRouter()

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
