import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //引入store
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store, //注册store实例
  render: function (h) { return h(App) }
}).$mount('#app')
