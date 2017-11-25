import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          redirect: '/helloworld'
        },
        {
          path: '/helloworld',
          component: HelloWorld
        },
        {
          path: '/login',
          component: Login
        }
      ]
    }
  ]
})
