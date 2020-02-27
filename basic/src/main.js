import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Unicode from './components/Unicode'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: Home
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/é',
      component: Unicode
    }
  ]
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
