<template>
  <div class="baseAPI">
    <h2>vuex 核心概念和 API</h2>
    <div>
      <!-- 这里使用了modules，所以加了对应的module名称 -->
      <p>clicked: {{$store.state.baseStore.count}} times, count is {{oddOrEven}}</p>
      <button @click="increment">+</button>
      <br />
      <button @click="decrement">-</button>
      <br />
      <button @click="incrementIfOdd">increment if odd</button>
      <br />
      <button @click="incrementAsync">increment async</button>
      <br />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    oddOrEven() {
      return this.$store.getters.oddOrEven;
    }
  },
  methods: {
    increment() {
        this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    incrementIfOdd() {
      this.$store.dispatch("incrementIfOdd");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync");
    }
  }
};
</script>