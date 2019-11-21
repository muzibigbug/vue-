<template>
    <div class="parent">
        <h1>消息订阅与发布PubSub</h1>
        <first-child></first-child>
        <second-child></second-child>
    </div>
</template>
<script>
import firstChild from './firstChild'
import secondChild from './secondChild'
export default {
    data() {
        return {

        }
    },
    components: {
        firstChild,secondChild
    }
}
</script>