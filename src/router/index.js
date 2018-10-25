import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ViewShow from '@/components/ViewShow'
import FZF from '@/components/404'
import Desktop from '@/components/desktop/Desktop'
import WinuiSettings from '@/components/desktop/winui/helper/settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: '404',
      path: '/404',
      component: FZF
    },
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
      path: '/Desktop/Winui/Settings',
      name: 'WinuiSettings',
      component: WinuiSettings
    },
    {
      path: '/',
      name: 'Desktop',
      component: Desktop
    },
    {
      path: '*',
      redirect: '/404'
    }

  ]
})
