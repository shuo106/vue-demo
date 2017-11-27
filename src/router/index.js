import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '@/view/home/home'
import Login from '@/view/user/login'
import Register from '@/view/user/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: Home
        },
        {
          path: '/login',
          component: Login
        },
        {
          path: '/register',
          component: Register
        }
      ]
    }
  ]
})
