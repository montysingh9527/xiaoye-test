// 图片放大镜指令
export default {
  inserted(el, binding, vnode) {
    const oImgWrap = el,
      oMagWrap = oImgWrap.querySelector(".mag-wrap"),
      oMagImg = oImgWrap.querySelector(".mag-img"),
      imgWidth = parseInt(window.getComputedStyle(oImgWrap, null)["width"]),
      imgHeight = parseInt(window.getComputedStyle(oImgWrap, null)["height"]),
      //   放大图片宽度
      magWidth = parseInt(window.getComputedStyle(oMagWrap, null)["width"]),
      //   放大图片高度
      magHeight = parseInt(window.getComputedStyle(oMagWrap, null)["height"]),
      // 盒子距离左边位置
      imgX = oImgWrap.offsetLeft,
      // 盒子距离顶部位置
      imgY = oImgWrap.offsetTop;
    console.log("==el=", imgWidth, imgHeight, magWidth, magHeight, imgX, imgY);

    const init = () => {
      bindEvent();
    };
    function bindEvent() {
      // 鼠标移动到元素上
      oImgWrap.addEventListener("mouseover", function (e) {
          // 添加类名
          oMagWrap.className += " show";
          // 获取坐标位置
          showMag(getXY(e).x, getXY(e).y);
          // 在元素上移动时
          document.addEventListener("mousemove", handleMouseMove, false);
        }, false);
      // 移出元素或其子元素时
      oImgWrap.addEventListener("mouseout", handleMouseOut);
    }
    // 鼠标在元素上移动
    function handleMouseMove(e) {
      const { x, y, mouseX, mouseY } = getXY(e);
      showMag(x, y, mouseX, mouseY);
    }
    // 鼠标移出元素
    function handleMouseOut() {
      oMagWrap.className = "mag-wrap";
      // 移除move事件
      document.removeEventListener("mousemove", handleMouseMove, false);
    }
    /**
     * 设置坐标值
     * @param {*} x x值
     * @param {*} y y值
     * @param {*} mouseX  边界值X范围
     * @param {*} mouseY  边界值Y范围
     */
    function showMag(x, y, mouseX, mouseY) {
      oMagWrap.style.left = x + "px";
      oMagWrap.style.top = y + "px";
      oMagImg.style.left = -x + "px";
      oMagImg.style.top = -y + "px";
      // 判断鼠标移动位置是否超出边界值
      if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
        // 重置类名
        oMagWrap.className = "mag-wrap";
        // 移除鼠标移动move事件
        document.removeEventListener("mousemove", handleMouseMove, false);
      }
    }
    /**
     * 获取坐标位置
     * @param {*} e
     * @returns
     */
    function getXY(e) {
      return {
        // 当前鼠标X位置 ：当前鼠标在页面的位置X - 盒子距离左边位置 - 放大盒子的一半
        x: e.pageX - imgX - magWidth / 2,
        y: e.pageY - imgY - magHeight / 2,
        // 边界值X位置 ：当前鼠标在页面的位置X - 盒子距离左边位置
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY,
      };
    }
    init();
  },
};
