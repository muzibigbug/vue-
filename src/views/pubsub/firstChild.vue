<template>
    <div class="firshChild">
        <h2>子1</h2>
        <button @click="sendMsg">向secondChild中传值</button>
    </div>
</template>
<script>
// 引入pubsub-js插件
import PubSub from 'pubsub-js'
export default {
    data() {
        return {
            msg: 'muzidigbig'
        }
    },
    methods: {
        sendMsg() {
            PubSub.publish('userEvent',this.msg); //发布消息
        }
    }
}
</script>