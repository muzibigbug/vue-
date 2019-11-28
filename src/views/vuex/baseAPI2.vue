<template>
  <div class="baseAPI2">
    <h2>vuex 核心概念和 API 优化版</h2>
    <div>
      <!-- 这里使用了modules，所以加了对应的module名称 -->
      <p>clicked: {{$store.state.baseStore2.count2}} times, count is {{oddOrEven2}}</p>
      <button @click="increment2">+</button>
      <br />
      <button @click="decrement2">-</button>
      <br />
      <button @click="incrementIfOdd2">increment if odd</button>
      <br />
      <button @click="incrementAsync2">increment async</button>
      <br />
    </div>
  </div>
</template>
<script>
// 辅助获取到多个getters/actions的值
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {};
  },
 
  computed: {
    // oddOrEven2() {
    //   return this.$store.getters.oddOrEven2;
    // }
    ...mapGetters(['oddOrEven2'])
  },
  
  
  methods: {
    /*
    increment2() {
        this.$store.dispatch('increment2')
    },
    decrement2() {
      this.$store.dispatch("decrement2");
    },
    incrementIfOdd2() {
      this.$store.dispatch("incrementIfOdd2");
    },
    incrementAsync2() {
      this.$store.dispatch("incrementAsync2");
    }
    */
   ...mapActions(['increment2','decrement2','incrementIfOdd2','incrementAsync2'])
  }
};
</script>