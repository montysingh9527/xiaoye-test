<!--  buttonUI组件 -->
<template>
  <button :class="['my-btn', btnStyle]">
    <!-- 插槽。用来定义按钮内文字 -->
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "MyBtn",
  props: {
    btnStyle: String,
  },
};
</script>

<style scoped lang="scss">
.my-btn {
  height: 30px;
  padding: 0 15px;
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  // &串联选择器 作用在同一标签上 等同于.my-btn.mybtn-primary
  &.mybtn-primary {
    background-color: var(--f-color-primary);
  }
  &.mybtn-pink {
    background-color: var(--f-color-pink);
  }
}
</style>
