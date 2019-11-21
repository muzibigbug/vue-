<template>
    <div class="filter">
        <h1>filters</h1>
        <h3>{{name | nameFilter}}</h3>
        <button @click='hint()'>点击弹出name</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:'muzidigbig'
        }
    },
    filters:{
        nameFilter: (data) => {
            return data+'1122'
        }
    },
    methods: {
        hint(){
            alert(this.name)
        }
    }
}
</script>
<style scode>

</style>