<template>
    <div class="secondChild">
        <h2>子2</h2>
        <p>firshChild传过来的数据：{{msgg}}</p>
    </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
    data() {
        return {
            msgg: ''
        }
    },
    mounted() {
        // 订阅消息
        PubSub.subscribe('userEvent',(msg,data) => {
            this.msgg = data
        })
    }
}
</script>