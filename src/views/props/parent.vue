<template>
    <div class="props-parent">
        <h1>父亲</h1>
        <input type="text" v-model.trim="msg" placeholder="请输入要传得值"> 
        <!--1.2
            定义传递的变量msgg -->
        <!-- 2.3 
            listenToChildEvent-->
        <child :msgg='msg' @listenToChildEvent='showMsgFromChild'></child>
        <p>来自于子组件的数据为：{{fromChildData}}</p>
    </div>
</template>
<script>
/** 
 * 1.1
*/
import child from './child';//引入子组件并在components注册
export default {
    data() {
        return {
            msg: '',
            fromChildData: ''
        }
    },
    components:{
        child
    },
    methods: {
        showMsgFromChild(data) {
            this.fromChildData = data
        }
    }
}
</script>