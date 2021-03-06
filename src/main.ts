import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'


export default new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
