<!--  用Vue的mixin混入做UI组件库 -->
<template>
  <div>
    <!-- 使用mixins当中MyBtn的组件 -->
    <MyBtn btnStyle="mybtn-primary">
      <span>按钮</span>
    </MyBtn>
    <MyBtn btnStyle="mybtn-pink">确认</MyBtn>
  </div>
</template>
<script>
import MyBtnMixin from "src/pages/vueTest/mixinTest/mixinJs/mixin.js";
export default {
  name: "MixinIndex",
  mixins: [MyBtnMixin], // 引入mixin ，也可以全局注册 Vue.mixin(MyBtnMixin)
};
</script>

  