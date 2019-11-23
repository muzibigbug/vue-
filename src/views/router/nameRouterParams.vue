<template>
    <div class="nameRouterParams">
        <h2>命名路由有参</h2>
        <p>命名路由传递过来的参数：{{nameRouterParams}}</p>
        <p>命名路由动态传递过来的参数：{{nameRouterDynParams}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nameRouterParams: '',
            nameRouterDynParams: ''
        }
    },
    mounted() {
        this.nameRouterParams = this.$route.params.nameID,
        this.nameRouterDynParams = this.$route.params.nameDynID
    }
}
</script>