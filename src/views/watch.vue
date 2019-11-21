<template>
    <div class="box">
        <h1>监听器</h1>
        <ul>
            <li v-for="(item,index) in arrayObj" :key="item.id">{{index}}--{{item.name}}---<input type="text" v-model="item.age"  @keydown="change(index)"></li>
        </ul>
        <hr>
        <ul>
            <li v-for="(item,index) in arrayObj" :key="item.id">{{index}}--{{item.name}}---{{item.age}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arrayObj:[
                {name:'张三',age:'23'},
                {name:'李四',age:'22'}
            ],
        }
    },
    watch:{
        // 需要注意的是这里所监听的对象应该是数组
        // arrayObj(newVal){
        //     console.log(newVal)
        // }
        arrayObj: {
            handler(newVal) {
                console.log(newVal)
            },
            deep: true,
            immediate: true
        }
    },
    methods:{
        change(i) {
            // console.log(this.changeValue)
            this.arrayObj[i].age = this.arrayObj[i].age
        }
    }
}
</script>
 