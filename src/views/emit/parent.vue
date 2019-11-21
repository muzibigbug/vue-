<template>
    <div class="parent">
        <h1>子传父emit</h1>
        <hr>
        <!--第三步 
            定义一个listenToChildEvent自定义事件监听子组件的触发
            在父组件中的子标签中监听该自定义事件并添加一个响应该事件的处理方法 -->
        <child @listenToChildEvent='showMsgFromChild'></child>
        <p>来自于子组件的数据为：{{fromChildData}}</p>
    </div>
</template>
<script>
import child from './child'
export default {
    data() {
        return {
            fromChildData: ''
        }
    },
    components:{
        child
    },
    methods: {
        /** 
         * 第四步
         * 响应事件的参数为子组件传递过来的值
        */
        showMsgFromChild(data) {
            this.fromChildData = data
        }
    }
}
</script>