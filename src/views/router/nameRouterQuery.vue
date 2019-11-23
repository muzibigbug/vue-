<template>
    <div class="nameRouterQuery">
        <h2>命名路由有参query</h2>
        <p>命名路由query传递过来的参数：{{nameQueryID}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nameQueryID: ''
        }
    },
    mounted() {
        this.nameQueryID = this.$route.query.queryID
    }
}
</script>