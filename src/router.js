import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
      name: 'name',
      component: () => {return import('./views/slot/parent.vue')}
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
