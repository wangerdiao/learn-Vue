import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import store from './store/index'
const vm = new Vue({
  render: h => h(App),
  // store:store
  store,
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  }
}).$mount('#app')