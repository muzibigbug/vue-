<template>
    <div class="metaRoute">
        <h1>路由元信息meta</h1>
        <p v-if="$route.meta.requiresAuth">获取meta的值进行判断是否显示--{{$route.meta.requiresAuth}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            metaVal: false
        }
    },
    beforeRouteEnter(to, from, next) { //导航守卫查看路由元信息
        console.log('meta', to)
        if(to.matched.some(record => record.meta.requiresAuth)) {
            next()
        }
    }
}
</script>