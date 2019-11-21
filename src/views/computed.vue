<template>
    <div class="computed">
        <h1>computed</h1>
        <p>sum:{{sum}}</p>
        <p>getAndsetSum:{{getAndsetSum}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num1: 1,
            num2: 2,
        }
    },
    computed: {
        sum: function() {
            return this.num1 + this.num2
        },
        getAndsetSum:{
            get() {
                return this.str
            },
            set(str) {
                this.str = str
            }
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>