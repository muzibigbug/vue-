<template>
    <div class="router">
        <h1>更多的路由操作</h1>
        <router-link :to="'/dynRouter/'+id">动态路由</router-link>
        <br>
        <router-link :to="'/getParamsRoute?getID='+getID">动态路由传参get</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: 11,
            getID: 22
        }
    }
}
</script>