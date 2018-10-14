import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ViewShow from '@/components/ViewShow'
import Desktop from '@/components/desktop/Desktop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/ViewShow',
      name: 'ViewShow',
      component: ViewShow
    },
    {
      path: '/',
      naem: 'Desktop',
      component: Desktop
    }

  ]
})
