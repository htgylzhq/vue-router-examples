import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import User from './components/User'
import Gallery from './components/Gallery'
import Image from './components/Image'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/redirect-gallery',
      name: 'redirect-gallery',
      redirect: {
        name: 'gallery'
      }
    },
    {
      path: '/redirect-image',
      name: 'redirect-image',
      redirect: {
        name: 'image',
        params: {
          imageId: 'image1'
        }
      }
    },
    {
      path: '/users',
      component: Users,
      children: [
        {
          path: ':username',
          name: 'user',
          component: User
        }
      ]
    },
    {
      path: '/gallery',
      component: Gallery,
      children: [
        {
          path: '',
          name: 'gallery',
          redirect: {
            name: 'image',
            params: {
              imageId: 'image1'
            }
          }
        },
        {
          path: ':imageId',
          component: Image,
          name: 'image'
        }
      ]
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
