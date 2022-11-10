(function (win, doc) {
  var oImgList = doc.getElementsByClassName("J-imgList")[0],
    // 获取img数据 转换会JSON对象
    data = JSON.parse(doc.getElementById("J-data").innerHTML),
    // 获取模板
    imgTpl = doc.getElementById("J-imgTpl").innerHTML,
    // 获取img标签
    oImgs = doc.getElementsByClassName("list-img");

  /**
   * 初始化
   */
  var init = function () {
    // 将数据渲染到页面上
    oImgList.innerHTML = renderList(data);
    // 滚动必须在页面渲染完成再执行
    bindEvent();
    // 初始滚动到顶部
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 200);
  };

  /**
   * 单页面加载完成，监听滚动事件，滚动屏幕执行懒加载方法
   */
  function bindEvent() {
    window.onload = window.onscroll = throttle(imgLazLoad(oImgs), 800);
  }
  /**
   * 模板数据
   * @param {*} data 图片及名称数据
   * @returns
   */
  function renderList(data) {
    var list = "";
    data.forEach((elem) => {
      // 匹配出{{img}} 将img/name替换为data中的地址
      list += imgTpl.replace(/{{(.*?)}}/g, function (node, key) {
        console.log("==node, key==", node, key, elem.img, elem.name);
        return {
          img: elem.img,
          name: elem.name,
        }[key];
      });
    });
    console.log("==list==", list);
    return list;
  }

  // 初始化执行
  init();
})(window, document);

/**
 * 懒加载
 * @param {*} images  img标签
 * @returns
 */
function imgLazLoad(images) {
  console.log("===images", images);
  var imgLen = images.length,
    n = 0;
  return function () {
    // 获取屏幕 、 获取滚动(卷去的)高度
    var cHeight = document.documentElement.clientHeight,
      sTop = document.documentElement.scrollTop || document.body.scrollTop,
      imgItem;
    // 这里不能使用i=0
    for (var i = n; i < imgLen; i++) {
      imgItem = images[i];
      console.log(
        "===offsetTop, clientHeight, scrollTop",
        imgItem.offsetTop,
        cHeight,
        sTop
      );
      if (imgItem.offsetTop < cHeight + sTop) {
        // 获取节点
        imgItem.src = imgItem.getAttribute("data-src");
        // 删除节点
        imgItem.removeAttribute("data-src");
        n++;
      }
    }
  };
}

/**
 * 节流
 * @param {*} fn 回调函数
 * @param {*} delay  延迟时间
 * @returns
 */
function throttle(fn, delay = 300) {
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
