<template>
  <div class="store">
    <h1>vuex;简单来说：对vue应用中多个组件的共享状态进行集中的管理(读/写)</h1>
    <router-link to="/vuex/baseAPI">vuex 核心概念和 API</router-link>
    <br>
    <router-link to="/vuex/baseAPI2">vuex 核心概念和 API 优化版</router-link>
    <br />
    <div class="vuex-view-box">
      <router-view></router-view>
    </div>
    <hr />
    <div>
      <div>
        <h3>状态自管理应用</h3>
        <p>1)state:驱动应用的数据源。</p>
        <p>2)view:以声明方式将state映射到试图。</p>
        <p>3)actions:响应在view上的用户输入导致的状态变化(包含n个更新状态的方式)</p>
      </div>
      <div>
        <h3>多组件共享状态的问题</h3>
        <p>1)多个视图依赖于统一状态</p>
        <p>2)来自不同视图的行为需要变更同一状态</p>
        <p>
          3)以前的解决办法
          <br />a.将数据以及操作数据的行为都定义在父组件
          <br />b.将数据以及操作数据的行为传递给需要的各个子组件(有可能需要多级传递)
        </p>
        <p>4)vuex就是用来解决这个问题的</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.vuex-view-box {
  border: 2px solid pink;
  border-radius: 5px;
  padding: 20px;
}
</style>