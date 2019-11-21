<template>
  <div class="parent">
    <h1>slot插槽父组件向子组件传递`标签数据`</h1>
    <first-child>
      <div class="tmpl" slot="up">
        <span>菜单1</span>
        <span>菜单2</span>
        <span>菜单3</span>
        <span>菜单4</span>
        <span>菜单5</span>
        <span>菜单6</span>
      </div>
      <div class="tmpl" slot="down">
        <span>菜单-1</span>
        <span>菜单-2</span>
        <span>菜单-3</span>
        <span>菜单-4</span>
        <span>菜单-5</span>
        <span>菜单-6</span>
      </div>
      <div class="tmpl">
        <span>菜单->1</span>
        <span>菜单->2</span>
        <span>菜单->3</span>
        <span>菜单->4</span>
        <span>菜单->5</span>
        <span>菜单->6</span>
      </div>
    </first-child>
    <hr />
    <hr />
    <!-- 第一次使用:用flex展示数据 -->
    <second-child>
      <template slot-scope="user">
        <div class="tmpl">
          <span v-for="(item,index) of user.data" :key="index">{{item}}</span>
        </div>
      </template>
    </second-child>
    <!--第二次使用：用列表展示数据-->
    <second-child>
      <template slot-scope="user">
        <ul>
          <li v-for="(item,index) of user.data" :key="index">{{item}}</li>
        </ul>
      </template>
    </second-child>
    <!--第三次使用：直接显示数据-->
    <second-child>
      <template slot-scope="user">{{user.data}}</template>
    </second-child>

    <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
    <second-child>我就是模板</second-child>

    <!-- 第五次使用:v-slot -->
    <second-child>
        <template v-slot:todo="user">todo:{{user.data}}</template>
    </second-child>
  </div>
</template>
<script>
import firstChild from "./firstChild";
import secondChild from "./secondChild";
export default {
  data() {
    return {};
  },
  components: {
    firstChild,
    secondChild
  }
};
</script>