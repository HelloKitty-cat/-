import Vue from 'vue'
import App from './App'
import router from './routers'
import VueLazyload from 'vue-lazyload'
import store from './store'
import './mock/mockServer'
import loading from './common/images/timg.gif'


Vue.use(VueLazyload, {
  loading,
  preLoad: 0.8
  })

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
