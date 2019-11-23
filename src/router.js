import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/computed',
      name: 'computed',
      component: () => {return import('./views/computed.vue')}
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => {return import('./views/watch.vue')}
    },
    {
      path: '/vBind',
      name: 'vBind',
      component: () => {return import('./views/vBind.vue')}
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => {return import('./views/filter.vue')}
    },
    {
      path: '/props',
      name: 'props',
      component: () => {return import('./views/props/parent.vue')}
    },
    {
      path: '/emit',
      name: 'emit',
      component: () => {return import('./views/emit/parent.vue')}
    }
    ,
    {
      path: '/bus',
      name: 'bus',
      component: () => {return import('./views/bus/parent.vue')}
    },
    {
      path: '/pubsub',
      name: 'pubsub',
      component: () => {return import('./views/pubsub/parent.vue')}
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => {return import('./views/slot/parent.vue')}
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => {return import('./views/axios/index.vue')}
    },
    // 下面开始路由的更多使用方式
    {
      path: '/router',
      name: 'router',
      component: () => {return import('./views/router/index.vue')}
    },
    {//动态路由(在url中出现参数)
      path: '/dynRouter/:id',
      name: 'dynRouter',
      component: () => {return import('./views/router/dynRouter.vue')}
    },
    {//动态路由get传参(在url中出现参数)
      path: '/getParamsRoute',
      name: 'getParamsRoute',
      component: () => {return import('./views/router/getParamsRoute.vue')}
    },
    {//命名路由(在url中看不到参数)
      path: '/nameRouter',
      name: 'nameRouter',
      component: () => {return import('./views/router/nameRouter.vue')}
    },
    {//命名路由传参(在url中看不到参数)
      path: '/nameRouterParams',
      name: 'nameRouterParams',
      component: () => {return import('./views/router/nameRouterParams.vue')}
    },
    {//命名路由传参query(在url中看不到参数)
      path: '/nameRouterQuery',
      name: 'nameRouterQuery',
      component: () => {return import('./views/router/nameRouterQuery.vue')}
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: function () { 
    //     return import(/* webpackChunkName: "about" */ './views/About.vue')
    //   }
    // }
  ]
})
