<template>
    <div class="props-child">
        <h1>孩子</h1>
        <!-- 1.4 -->
        <p>父组件传来的值为：{{msgg}}</p>
        <!-- 2.1 -->
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
    /** 
     * 1.3
     * 定义props属性接收传来的值
    */
    // props: ['msg'],//方式一
    props:{//方式二
        // msgg: String,//定义数据类型
        // msgg: [String,Number],//多个可能的类型
        msgg:{
            type: String,
            required: true,//必填
            default: 'muzidigbig' //默认值
        }
    },
    methods: {
        sendMsgToParent() {
            /** 
             * 2.2
            */
           this.$emit('listenToChildEvent',this.message)
        }
    }
}

</script>
<style lang="less" scoped>

</style>