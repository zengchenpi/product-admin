import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/creative/center',
          name: 'creativeCenter',
          component: () => import('./views/creative/creativeCenter')
        },
        //所有需求页面
        {
          path: '/demand/allDemand',
          name: 'allDemand',
          component: () => import('./views/demand/allDemand')
        },
        //所有产品
        {
          path: '/demand/allProduct',
          name: 'allProduct',
          component: () => import('./views/demand/allProduct')
        },
        // 添加模板
        {
          path: '/add/template/:name',
          name: 'addTemplate',
          component: () => import('./views/demand/addTemplate')
        },
        //添加需求
        {
          path: '/add/demand',
          name: 'addDemand',
          component: () => import('./views/demand/addDemand')
        },
        //我的待办 我的需求
        {
          path: '/myuntreated/mydemand',
          name: 'mydemand',
          component: () => import('./views/myuntreated/MyDemand')
        }, 
        //我的待办 需求审核
        {
          path: '/myuntreated/demandAudit',
          name: 'demandAudit',
          component: () => import('./views/myuntreated/DemandAudit')
        },
        //审核退回修订
        {
          path:'/myuntreated/reviewReturnRevision',
          name:'reviewReturnRevision',
          component: ()=>import('./views/myuntreated/reviewReturnRevision')
        },
        // 默认页面
        {
          path: '*',
          name: 'default',
          component: () => import('./views/Main')
        },
      ]
    },

  ]
})
