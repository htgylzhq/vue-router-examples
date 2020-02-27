import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './components/Index'
import IndexChild1 from './components/IndexChild1'
import IndexChild2 from './components/IndexChild2'
import Home from './components/Home'
import WithGuard from './components/WithGuard'
import ViewWithKeepalive from './components/ViewWithKeepalive'
import Parent from './components/Parent'
import RequiredProps from './components/RequiredProps'
import CatchWarn from './components/CatchWarn'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'child1',
          component: IndexChild1
        },
        {
          path: 'child2',
          component: IndexChild2
        }
      ]
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/with-guard1',
      name: 'with-guard1',
      component: WithGuard
    },
    {
      path: '/with-guard2',
      name: 'with-guard2',
      component: WithGuard
    },
    {
      path: '/one',
      component: ViewWithKeepalive,
      children: [
        {
          path: 'two',
          component: ViewWithKeepalive,
          children: [
            {
              path: 'child1',
              component: IndexChild1
            },
            {
              path: 'child2',
              component: IndexChild2
            }
          ]
        }
      ]
    },
    {
      path: '/config-required-props',
      component: Parent,
      props: { msg: 'from parent' },
      children: [
        {
          path: 'child',
          component: RequiredProps,
          props: {
            msg: 'from child'
          }
        }
      ]
    },
    {
      path: '/catch-warn',
      component: CatchWarn
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
