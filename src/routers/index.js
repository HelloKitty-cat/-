import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home'
import Item from '../pages/Item/Item'
import Topic from '../pages/Topic/Topic'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Login/Login'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/item',
      component: Item
    },
    {
      path: '/topic',
      component: Topic
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '',
      redirect: '/home'
    }
  ]
})
