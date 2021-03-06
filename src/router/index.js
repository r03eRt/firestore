import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      mata: {
        Auth: false,
        title: 'Inicio'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      mata: {
          Auth: false,
          title: 'Registro'
      }
    }
  ]
})
