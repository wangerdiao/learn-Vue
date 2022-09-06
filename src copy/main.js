import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
Vue.config.productionTip = false
// import store from './store/index'
Vue.use(VueRouter)
const vm = new Vue({
  render: h => h(App),
  // store:store
  // store,
  router,
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  }
}).$mount('#app')