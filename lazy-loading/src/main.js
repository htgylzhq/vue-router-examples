import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Bar from './components/Bar'
import Baz from './components/Baz'
import Foo from './components/Foo'
import Tags from './components/Tags'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    {
      path: '/a/:tags*', name: 'tagged', component: Tags
    },
    {
      path: '/bar', component: Bar,
      children: [
        { path: 'baz', component: Baz }
      ]
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
