import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Unicode from './components/Unicode'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/é', component: Unicode },
    { path: '/é/:unicode', component: Unicode }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
