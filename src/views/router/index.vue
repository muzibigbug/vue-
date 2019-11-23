<template>
    <div class="router">
        <h1>更多的路由操作</h1>
        <router-link :to="'/dynRouter/'+id">动态路由</router-link>
        <br>
        <router-link :to="'/getParamsRoute?getID='+getID">动态路由传参get</router-link>
        <br>
        <router-link :to="{name: 'nameRouter'}">命名路由无参（to是一个对象）</router-link>
        <br>
        <router-link :to="{name: 'nameRouterParams', params: {nameID:33}}">命名路由传参（to是一个对象）</router-link> <br>
        <button @click.stop="sendNameRouterParams">点击事件进行命名路由传值</button>
        <br>
        <router-link :to="{path: '/nameRouterQuery', query: {queryID: 55}}">命名路由query传参（to是一个对象）</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: 11,
            getID: 22,
            nameDynID: 44
        }
    },
    methods: {
        sendNameRouterParams() {
            //命名路由动态传值
            this.$router.push({name: 'nameRouterParams', params: {nameDynID: this.nameDynID}})
        }
    }
}
</script>