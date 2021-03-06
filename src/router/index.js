import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/App.vue'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ]
});