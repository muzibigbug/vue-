<template>
    <div class="secondChild">
        <h2>子2</h2>
        <p>从firstChild接收的字符串参数：{{msg}}</p>
    </div>
</template>
<script>
import bus from './bus';
export default {
    data() {
        return {
            msg: '默认值'
        }
    },
    mounted() {
        let _this = this 
        //定义监听事件
        bus.$on('userDefindEvent',function(msg) {
            _this.msg = msg
        })
    }
}
</script>