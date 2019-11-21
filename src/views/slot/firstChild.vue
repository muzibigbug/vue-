<template>
    <div class="firstChild">
        <!-- 具名插槽up -->
        <slot name="up"></slot>
        <h2>子组件1</h2>
        <!-- 具名插槽down -->
        <slot name="down"></slot>
        <hr>
        <!-- 匿名插槽 -->
        <slot></slot>
        
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>