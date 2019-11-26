import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    mode: 'hash',
    routes: [{ //routes配置项配项可以称为路由记录
            path: '/computed',
            name: 'computed',
            redirect: '/',
            component: () => { return import ('./views/computed.vue') }
        },
        {
            path: '/watch',
            name: 'watch',
            component: () => { return import ('./views/watch.vue') }
        },
        {
            path: '/vBind',
            name: 'vBind',
            component: () => { return import ('./views/vBind.vue') }
        },
        {
            path: '/filter',
            name: 'filter',
            component: () => { return import ('./views/filter.vue') }
        },
        {
            path: '/props',
            name: 'props',
            component: () => { return import ('./views/props/parent.vue') }
        },
        {
            path: '/emit',
            name: 'emit',
            component: () => { return import ('./views/emit/parent.vue') }
        },
        {
            path: '/bus',
            name: 'bus',
            component: () => { return import ('./views/bus/parent.vue') }
        },
        {
            path: '/pubsub',
            name: 'pubsub',
            component: () => { return import ('./views/pubsub/parent.vue') }
        },
        {
            path: '/slot',
            name: 'slot',
            component: () => { return import ('./views/slot/parent.vue') }
        },
        {
            path: '/axios',
            name: 'axios',
            component: () => { return import ('./views/axios/index.vue') }
        },
        // 下面开始路由的更多使用方式
        {
            path: '/router',
            name: 'router',
            component: () => { return import ('./views/router/index.vue') }
        },
        { //动态路由(在url中出现参数)
            path: '/dynRouter/:id',
            name: 'dynRouter',
            component: () => { return import ('./views/router/dynRouter.vue') }
        },
        { //动态路由get传参(在url中出现参数)
            path: '/getParamsRoute',
            name: 'getParamsRoute',
            component: () => { return import ('./views/router/getParamsRoute.vue') }
        },
        { //命名路由(在url中看不到参数)
            path: '/nameRouter',
            name: 'nameRouter',
            component: () => { return import ('./views/router/nameRouter.vue') }
        },
        { //命名路由传参(在url中看不到参数)
            path: '/nameRouterParams',
            name: 'nameRouterParams',
            component: () => { return import ('./views/router/nameRouterParams.vue') }
        },
        { //命名路由传参query(在url中看不到参数)
            path: '/nameRouterQuery',
            name: 'nameRouterQuery',
            component: () => { return import ('./views/router/nameRouterQuery.vue') }
        },
        { //嵌套路由
            path: '/nestRouter',
            name: 'nestRouter',
            component: () => { return import ('./views/router/nestRouter/parent.vue') },
            //嵌套路由关键children，在父路由中添加children属性   配置每个嵌套的子路由
            children: [{
                    // 要注意，以 / 开头的嵌套路径会被当作根路径,这让你充分的使用嵌套组件而无须设置嵌套的路径。如果这里的path的值为'/son1将无法渲染son1子组件'
                    path: 'first',
                    name: 'nestRouter-first',
                    component: () => { return import ('./views/router/nestRouter/firstChild.vue') }
                }, {
                    path: 'second',
                    name: 'nestRouter-second',
                    component: () => { return import ('./views/router/nestRouter/secondChild.vue') }
                }

            ]
        },
        { //视图路由
            path: '/viewRouter',
            name: 'viewRouter',
            components: { //视图路由components，值是一个对象；对象中属性  键是子组件视图的name值，值是子组件的路径
                viewRouterPL: () => { return import ('./views/router/viewRouter/parent.vue') },
                viewRouterPL_first: () => { return import ('./views/router/viewRouter/firstChild.vue') }
            },
            children: [{
                    path: 'first',
                    name: 'viewRouter-first',
                    components: {
                        viewRouterPL_first: () => { return import ('./views/router/viewRouter/firstChild.vue') },
                        viewRouterPL_second: () => { return import ('./views/router/viewRouter/secondChild.vue') }
                    }
                },
                {
                    path: 'second',
                    name: 'viewRouter-second',
                    components: {
                        viewRouterPL_second: () => { return import ('./views/router/viewRouter/secondChild.vue') },
                        viewRouterPL_three: () => { return import ('./views/router/viewRouter/threeChild.vue') }
                    }
                }
            ]
        },
        { //重定向redirect
            path: '/redirect',
            name: 'redirect',
            component: () => { return import ('./views/router/redirectRouter/index.vue') },
            redirect: '/nestRouter' //重定向到嵌套路由(已存在)
        },
        { //别名路由alias
            path: '/alias',
            alias: '/aa',
            name: 'alias',
            component: () => { return import ('./views/router/aliasRouter/index.vue') }
        },
        {//路由守卫---路由独享的守卫beforeEnter
          path: '/routeGuard',
          name: 'routeGuard',
          meta: {
            flg: true
          },
          component: () => {return import('./views/router/routeGuard/index.vue')},
          beforeEnter(to,from,next) {
            if(to.meta.flg) {
              alert('路由独享的守卫之一beforeEnter')
              next()
            }else {
              next()
            }
          }
        },
        {//路由守卫---路由组件的守卫beforeRouteEnter
          path: '/componentGuard',
          name: 'componentGuard',
          meta: {
            flg: true
          },
          component: () => {return import('./views/router/routeGuard/componentGuard.vue')}
        },
        { //路由元信息meta
            path: '/metaRoute',
            name: 'metaRoute',
            meta: {
                keepAlive: true,//是否局部路由缓存
                requiresAuth: true
            },
            component: () => {return import('./views/router/metaRoute/index.vue')}
        }
       
    ]
})
//全局路由守卫beforeEach
router.beforeEach((to,from,next) => {
  console.log('to',to)
  console.log('from',from)
  if(to.path === '/'){
    console.log('全局路由守卫/')
  }else {
    next();
  }
})

export default router;