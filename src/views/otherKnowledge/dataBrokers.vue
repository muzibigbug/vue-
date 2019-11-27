<template>
    <div class="dataBrokers">
        <h2>数据代理</h2>
        <div>
            <p>1)数据代理：通过一个对象代理对另一个对象（在前一个对象内部）中属性的操作（读/写）</p>
            <p>2)vue数据代理：通过vm对象来代理data对象中所有属性的操作</p>
            <p>3)好处：更方便的操作data中的数据</p>
            <p>
                4)基本实现流程 <br>
                a.通过Object.defineProperty()给vm添加与data对象的属性对应的属性描述符 <br>
                b.所有添加的属性都包含getter/setter <br>
                c.getter/setter内部去操作data中对应的属性数据 <br>
            </p>
        </div>
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