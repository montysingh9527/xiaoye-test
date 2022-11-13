/**
 * 写逻辑
 */

import { compute } from "src/pages/vueTest/calculator/mixins/compute.js"; // 导入计算方法
function calculatorReducer(data) {
  function setNumber(field, value) {
    // 判断输入的值
    if (typeof value !== "number") {
      value = Number(value);
    }
    data[field] = value;
    // 返回计算值
    return compute(data.curMethod, data.firstNumber, data.secondNumber);
  }
  function changeMethod(method) {
    data.curMethod = method;
    // 返回计算值
    return compute(data.curMethod, data.firstNumber, data.secondNumber);
  }

  return {
    setNumber,
    changeMethod,
  };
}

export default calculatorReducer;
