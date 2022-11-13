<!-- 按钮页面 -->
<template>
  <button class="btn-text"
    :method="method"
    :class="{ current: method === curMethod }"
    @click="changeMethod"
  >
    {{ innerText }}
  </button>
</template>
    
<script>
export default {
  name: "CalButton",
  props: {
    method: String, // 类型，符号的类型
    curMethod: String, // 类型，当前点击符号的类型
    innerText: String, // 符号 + - * /
  },
  methods: {
    changeMethod() {
      this.$emit("dispatch", "CHANGE_METHOD", this.method);
    },
  },
};
</script>

<style scoped lang="scss">
.btn-text{
    width: 30px;
    background-color: var(--f-color-negative);
}
.current {
  background-color: orange;
  color: #fff;
}
</style>
    