<template>
    <div class="templateParse">
        <h2>模板解析</h2>
        <div>
            <h4>1.模板解析的基本流程</h4>
            <p>
                1)将el的所有子节点取出来，添加到一个新建的文档fragment对象中 <br>
                2)对fragment中的所有层次子节点递归进行编译解析处理 <br>
                *对大括号表达式文本节点进行解析 <br>
                *对元素节点的指令属性进行解析 <br>
                    *事件指令解析 <br>
                    *一般指令解析 <br>
                3)将解析后的fragment添加到el中显示 <br>
            </p>
            <div>
                <h4>模板解析(1):大括号表达式解析</h4>
                <p>
                    1)根据正则对象得到匹配出的表达式字符串：子匹配/RegExp.$1 name <br>
                    2)从data中取出表达式对应的属性值 <br>
                    3)将属性值设置为文本节点的textContent
                </p>
            </div>
            <div>
                <h4>模板解析(2):事件指令解析</h4>
                <p>
                    1)从指令中取出事件名 <br>
                    2)根据指令的值(表达式)从methods中得到对应的事件处理函数对象 <br>
                    3)给当前元素节点绑定指定事件名和回掉函数的dom事件监听 <br>
                    4)指令解析完后，移除此指令属性
                </p>
            </div>
            <div>
                <h4>模板解析(3):一般指令解析</h4>
                <p>
                    1)得到指令名和指令值(表达式) text/html/class  msg/myClass <br>
                    2)从data中根据表达式得到对应的值 <br>
                    3)根据指令名确定需要操作元素节点的什么属性 <br>
                    * v-text---textContent属性 <br>
                    * v-html---innerHTML属性 <br>
                    * v-class---className属性 <br>
                    4)将得到的表达式的值设置到对应的属性上 <br>
                    5)移除元素的指令属性 
                </p>
            </div>
        </div>
    </div>
</template>