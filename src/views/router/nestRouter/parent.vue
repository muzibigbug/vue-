<template>
    <div class="nestRouter-parent">
        <h1>嵌套路由父组件</h1>
        <router-link to="/nestRouter/first">嵌套路由展示first</router-link>
        <br>
        <router-link to="/nestRouter/second">嵌套路由展示second</router-link>
        <div class="nestRouter-view">
            <h3>嵌套路由router-view展示区域</h3>
            <!-- 嵌套路由中子路由的占位符 -->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>