/**
 * 派发器逻辑
 */

import reducer from "src/pages/vueTest/calculator/mixins/reducer.js";
import {
  SET_NUMBER,
  CHANGE_METHOD,
} from "src/pages/vueTest/calculator/mixins/calculator.js";

export default (ctx) => {
  // ctx就是this。 ctx.$data 是component的calculator.vue中data值result
  const { setNumber, changeMethod } = reducer(ctx.$data);
  return function (type, ...args) {
    switch (type) {
      case SET_NUMBER:
        ctx.result = setNumber(...args);
        break;
      case CHANGE_METHOD:
        ctx.result = changeMethod(...args);
        break;
      default:
        break;
    }
  };
};
