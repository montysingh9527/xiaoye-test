(function (doc, initTools) {
  var oCalculator = doc.getElementsByClassName("J_calculator")[0],
    oResult = oCalculator.getElementsByClassName("result")[0],
    oInputs = oCalculator.getElementsByTagName("input"),
    oBtnGroup = oCalculator.getElementsByClassName("btn-group")[0];

  // 初始化
  var init = function () {
    btndEvent();
  };

  // 监听点击事件
  function btndEvent() {
    oBtnGroup.addEventListener("click", onBtnClick, false);
  }

  /**
   * 点击事件
   * @param {*} ev 事件对象
   */
  function onBtnClick(ev) {
    // 获取标签
    var tar = initTools.getTarget(ev),
      // 获取标签名
      tagName = tar.tagName.toLowerCase();
    // 函数 ——> 各行其职 ——> 一个函数完成一个功能
    // 点击响应程序的函数       响应的程序是什么？——> 事件处理函数
    if (tagName === "button") {
      // 获取计算类型 + - * /
      var method = tar.getAttribute("data-method"),
        // 获取第一个输入框的值
        fVal = initTools.digitalize(oInputs[0].value),
        // 获取第二个输入框的值
        sVal = initTools.digitalize(oInputs[1].value);
      // 执行计算结果
      renderResult(initCompute[method](fVal, sVal));
    }
    /**
     * 将计算结果渲染到页面
     * @param {*} result 计算结果
     */
    function renderResult(result) {
      oResult.innerText = result;
    }
  }

  init();
})(document, initTools);
