<template>
    <div class="firstChild">
        <h2>子1</h2>
        <button @click="sendMsg">向兄弟2中传值</button>
    </div>
</template>
<script>
import bus from './bus';//引入中央总线Vue实例
export default {
    data() {
        return {
            msg: '向兄弟2中传值'
        }
    },
    methods: {
        sendMsg() {
            /** 
             * $emit()触发事件并传值
            */
            bus.$emit('userDefindEvent', this.msg)
        }
    }
}
</script>