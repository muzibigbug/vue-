<template>
    <div class="dynRouter">
        <h2>dynRouter动态路由</h2>
        <p>动态路由传过来的值：{{dynRouterVal}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dynRouterVal:''
        }
    },
    mounted() {
        this.dynRouterVal = this.$route.params.id
    }
}
</script>