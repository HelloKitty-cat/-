import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './store'
import './mock/mockServer'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
