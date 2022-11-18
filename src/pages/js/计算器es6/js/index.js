// 引入计算类
import Calculator from "./modules/Calculator.js";
((doc) => {
  const oCalculator = doc.getElementsByClassName("J_calculator")[0];

  const init = () => {
    // 实例化计算类，传入当前模板节点
    new Calculator(oCalculator).init();
  };
  init();
})(document);
