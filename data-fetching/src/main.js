import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Post from './components/Post'

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
      path: '/post/:id',
      component: Post
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
