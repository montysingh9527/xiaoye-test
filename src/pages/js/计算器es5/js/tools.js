/**
 * 立即执行函数，独立作用域，执行后即销毁
 */

// 1、报错
// function(){
//     console.log(1);
// }();

// 2、不报错
// !function(){
//     console.log(1);
// }();
// 3、不报错
// (function(){
//     console.log(1);
// })();
// 4、不报错
// -function(){
//     console.log(1);
// }();

// a = 1;
// !a;
// +a;
// a++;
// -a;
// (a)

var initTools = (function () {
  /**
   * 过滤空格
   * @param {*} str
   * @returns
   */
  function digitalize(str) {
    return Number(str.replace(/\s+/g, "")) || 0;
  }
  /**
   * 事件对象
   * @param {*} ev 事件对象
   * @returns
   */
  function getTarget(ev) {
    var e = ev || window.event;
    return e.target || e.srcElement;
  }
  return {
    digitalize: digitalize,
    getTarget: getTarget,
  };
})();

// 计算
var initCompute = (function () {
  function plus(a, b) {
    return a + b;
  }
  function minus(a, b) {
    return a - b;
  }
  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }
  return {
    plus: plus,
    minus: minus,
    mul: mul,
    div: div,
  };
})();

