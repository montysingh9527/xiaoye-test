<!-- 总页面 ：按钮组件 输入框组件 计算类型组件-->
<template>
  <div class="q-gutter-md q-ma-md">
    <CalResult :result="result" />
    <div class="q-gutter-md">
      <CalInput field="firstNumber" @dispatch="dispatch" />
      <CalInput field="secondNumber" @dispatch="dispatch" />
    </div>
    <div class="q-gutter-md">
      <CalButton
        innerText="+"
        method="plus"
        :curMethod="curMethod"
        @dispatch="dispatch"
      />
      <CalButton
        innerText="-"
        method="minus"
        :curMethod="curMethod"
        @dispatch="dispatch"
      />
      <CalButton
        innerText="*"
        method="mul"
        :curMethod="curMethod"
        @dispatch="dispatch"
      />
      <CalButton
        innerText="/"
        method="div"
        :curMethod="curMethod"
        @dispatch="dispatch"
      />
    </div>
  </div>
</template>
  
<script>
import CalButton from "src/pages/vueTest/calculator/component/Button.vue"; // 按钮
import CalInput from "src/pages/vueTest/calculator/component/Input.vue"; // 输入框
import CalResult from "src/pages/vueTest/calculator/component/Result.vue"; // 结果
import dispatch from "src/pages/vueTest/calculator/mixins/dispatch.js"; // 导入派发器
export default {
  name: "Calculator",
  components: {
    CalButton,
    CalInput,
    CalResult,
  },
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      curMethod: "plus", // 类型加减乘除
      result: 0, // 结果
    };
  },
  methods: {
    dispatch(...args) {
      dispatch(this)(...args);
    },
  },
};
</script>
