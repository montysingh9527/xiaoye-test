<!-- 汇总组件 -->
<template>
  <div class="q-gutter-md q-ma-md">
    <CounterResult :result="result" />
    <CounterButton innerText="+" action="PLUS" @dispatch="dispatch" />
    <CounterButton innerText="-" action="MINUS" @dispatch="dispatch" />
  </div>
</template>


<script>
import CounterResult from "src/pages/vueTest/counter/component/Result.vue";
import CounterButton from "src/pages/vueTest/counter/component/Button.vue";
import dispatch from "src/pages/vueTest/counter/mixins/dispatch.js";
export default {
  name: "Counter",
  components: {
    CounterResult,
    CounterButton,
  },
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    dispatch(...args) {
      dispatch(this)(...args);
    },
  },
};
</script>