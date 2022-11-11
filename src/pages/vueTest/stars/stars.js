/**
 * 组件批量注册（模拟）
 */

import Stars from "./component/stars.vue";

const JSUI = {};

const componentPool = [
  Stars,
  // ...
];

JSUI.install = function (Vue) {
  componentPool.forEach((item) => {
    Vue.component(item.name, item); // 组件注册 (组件名称, 组件)
  });
};

export default JSUI;
