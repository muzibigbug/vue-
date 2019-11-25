<template>
    <div class="componentGuard">
        <h1>组件路由守卫boforeRouteEnter</h1>
        <p v-if="flgg">组件路由守卫boforeRouteEnter内容部分</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flgg: false
        }
    },
    beforeRouteEnter(to,from,next) { //这个时候vue实例还没有创建
        console.log('component',to)
        if(to.meta.flg) {
            // this.flg = Boolean(to.meta.flg)
            console.log('组件路由守卫的meta',to.meta.flg)
            next()
        }else {
            next()
        }
    },
    beforeRouteUpdate(to,from,next) {
        if(to.meta.flg) {
            this.flg = to.meta.flg
            console.log('组件路由守卫的meta2',to.meta.flg)
            next()
        }else {
            next()
        }
    }
}
</script>