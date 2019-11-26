<template>
  <div id="app">
    <h1>{{h1}}</h1>
    <h2 class="h2" v-text="h2"></h2>
    <h3 v-html="h3"></h3>
    <h4 v-html="h4"></h4>
    <hr>
    <router-link to='/computed'>计算属性</router-link>
    <br>
    <router-link to='/watch'>watch监听器</router-link>
    <br>
    <router-link to='/vBind'>v-bind属性</router-link>
    <br>
    <router-link to='/filter'>过滤器filter</router-link>
    <br>
    <router-link to='/props'>父传子props</router-link>
    <br>
    <router-link to='/emit'>子传父emit</router-link>
    <br>
    <router-link to='/bus'>组件间传值bus中线</router-link>
    <br>
    <router-link to='/pubsub'>组件间传值pubsub消息订阅与发布</router-link>
    <br>
    <router-link to='/slot'>slot插槽父组件向子组件传递`标签数据`</router-link>
    <br>
    <router-link to='/axios'>axios请求数据</router-link>
    <br>
    <router-link to='/router'>router路由</router-link>
    <br>
    <router-link to="/redirect">redirect重定向路由</router-link>
    <br>
    <!-- 跳转'/aa/实质是跳转到'/alias' -->
    <router-link to="/aa">alias别名路由</router-link>
    <br>
    <router-link to='/routeGuard'>路由守卫之一beforeEnter</router-link>
    <br>
    <router-link to='/componentGuard'>组件守卫---beforeRouteEnter</router-link>
    <br>
    <router-link to='/metaRoute'>路由元信息meta</router-link>
    

    <router-view></router-view>
    <!-- 视图的占位符 -->
    <router-view name='viewRouterPL'></router-view>
    <router-view name="viewRouterPL_first"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      h1:'vue测试',
      h2:'渲染数据的第二种写法v-text',
      h3:'<div style="color:red;">渲染数据的第三种写法v-html</div>',
      h4:'<a href="javascript:;" >样式控制a标签</a>',
    }
  }
}
</script>
<style lang="less" scoped>
  .h2{
    font-weight: 400;
  }
  h4{
    &::v-deep a{
     color: hotpink;
     font-weight: 600;
   }
  }
  h4{
    /deep/ a{
      color: green;
    }
  }
</style>