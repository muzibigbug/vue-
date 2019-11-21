<template>
  <div class="secondChild">
    <h2>子组件2</h2>
    <!-- 作用于插槽 -->
    <slot :data="data"></slot>
    <!-- 具名插槽todo -->
    <slot name="todo" :data="data"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: ["zhangsan", "lisi", "wanwu", "zhaoliu", "tianqi", "xiaoba"]
    };
  }
};
</script>