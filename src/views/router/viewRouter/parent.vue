<template>
    <div class="viewRouter-parent">
        <h1>视图路由components</h1>
        <router-link to="/viewRouter/first">视图路由first+second</router-link>
        <br>
        <router-link to="/viewRouter/second">视图路由second+three</router-link>

        <router-view name="viewRouterPL_first"></router-view>
        <router-view name="viewRouterPL_second"></router-view>
        <router-view name="viewRouterPL_three"></router-view>
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