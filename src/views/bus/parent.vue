<template>
    <div class="parent">
        <h1>中央总线通信</h1>
        <first-child></first-child>
        <second-child></second-child>
    </div>
</template>
<script>
import firstChild from './firstChild';
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