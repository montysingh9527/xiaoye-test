/** 
 * 方式一、
class Calculator {
  创建类
}
导出类
export { Calculator };

引入类
import { Calculator } from './Calculator.js';
使用类
new Calculator();
 */

/** 
 * 方式二、
导出类
export default class Calculator {
}
引入类
import Calculator from './Calculator.js'
*/

/**
 * 导出计算类
 */
export default class Calculator {
  constructor(el) {
    console.log("Calculator——constructor(el)==>>", el);
    this.name = "Calculator";
    // 获取结果
    this.oResult = el.getElementsByClassName("result")[0];
    // 获取按钮
    this.oBtnGroup = el.getElementsByClassName("btn-group")[0];
    // 获取输入框
    this.oInputs = el.getElementsByClassName("num-input");
  }
  // 初始化
  init() {
    this.bindEvent();
  }
  // 绑定事件
  bindEvent() {
    this.oBtnGroup.addEventListener("click", this.onBtnClick.bind(this), false);
  }
  /**
   * 点击事件
   * @param {*} ev 事件对象
   */
  onBtnClick(ev) {
    const e = ev || window.event,
      tar = e.target || e.srcElement,
      tagName = tar.tagName.toLowerCase();
    if (tagName === "button") {
      // 获取属性值 计算类型
      const method = tar.getAttribute("data-method"),
        // 获取输入框的值
        fVal = Number(this.oInputs[0].value.replace(/\s+/g,'')) || 0,
        sVal = Number(this.oInputs[1].value.replace(/\s+/g,'')) || 0;

      // 计算
      switch (method) {
        case "plus":
          this.oResult.innerText = fVal + sVal;
          break;
        case "minus":
          this.oResult.innerText = fVal - sVal;
          break;
        case "mul":
          this.oResult.innerText = fVal * sVal;
          break;
        case "div":
          this.oResult.innerText = fVal / sVal;
          break;
        default:
          break;
      }
    }
  }
}
