import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import auth from './auth'

Vue.config.productionTip = false
Vue.use(VueRouter)

function requireAuth(to, from, next) {
  if (auth.loggedIn()) {
    next()
  } else {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
