<template>
    <div class="getParamsRoute">
        <h2>动态路由get传参</h2>
        <p>接收动态路由get传递过来的参数：{{getParamsRoute}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            getParamsRoute: ''
        }
    },
    mounted() {
        this.getParamsRoute = this.$route.query.getID
    }
}
</script>