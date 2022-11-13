/**
 * 计算逻辑
 */

/**
 * 计算值
 * @param {*} method 计算类型
 * @param {*} fNumber 输入的第一个值
 * @param {*} sNumber 输入的第二个值
 */
function compute(method, fNumber, sNumber) {
  switch (method) {
    case "plus":
      return fNumber + sNumber;
    case "minus":
      return fNumber - sNumber;
    case "mul":
      return fNumber * sNumber;
    case "div":
      return fNumber / sNumber;
    default:
      break;
  }
}

export { compute };
