<template>
    <div class="bothwayDataBind">
        <h1>双向数据绑定</h1>
        <p>
            1)双向数据绑定是建立在单向数据绑定(model==>View)的基础之上的  <br>
            2)双向数据绑定的实现流程：  <br>
            a.在解析v-model指令时，给当前元素添加input监听 <br>
            b.当input的value发生改变时，将最新的值赋值给当前表达式所对应的data属性
        </p>
    </div>
</template>