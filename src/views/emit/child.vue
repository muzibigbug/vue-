<template>
    <div class="child">
        <h2>child子组件</h2>
        <!-- 第一步 -->
        <button @click="sendMsgToParent">点击向父组件传数据</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '子组件的data'
        }
    },
    methods: {
        /** 
         * 第二步
        */
        sendMsgToParent() {
            //在子组件中使用$emit(eventName,data)来触发一个自定义事件，并传递一个参数
            this.$emit('listenToChildEvent',this.message);
        }
    }
}
</script>