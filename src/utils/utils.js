/**
 * 节流函数： 在一段时间只触发一次
 *  fn 回调函数
 *  delay 执行时间
 */
function throttle(fn, delay) {
  let t = null,
    begin = new Date().getTime();
  return function () {
    // this指向
    let that = this,
      // 参数
      args = arguments,
      // 当前时间
      cur = new Date().getTime();
    clearTimeout(t);
    if (cur - begin >= delay) {
      fn.apply(that, args);
      begin = cur;
    } else {
      t = setTimeout(function () {
        fn.apply(that, args);
      }, delay);
    }
  };
}


export {
    throttle
}