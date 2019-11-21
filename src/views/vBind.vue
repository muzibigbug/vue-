<template>
    <div class="vBind">
        <h1 :class="colorPink">v-bind</h1>
        <h2 :class="flg ? fontSize16 : ''">v-bind的flg</h2>
        <h3 :class="[colorPink,fontSize16]">v-bind []</h3>
        <h4 :class="obj.fontSize18">v-bind对象obj</h4>
    </div>
</template>
<script>
export default {
    data() {
        return {
            colorPink:'colorPink',
            flg:true,
            fontSize16: 'fontSize16',
            
            obj: {
                fontSize18: 'fontSize18',
            }
        }
    }
}
</script>
<style scoped>
    .colorPink{
        color:pink ;
    }
    .fontSize16{
        font-size: 16px;
    }
    .fontSize18{
        font-size: 18px;
    }
</style>
