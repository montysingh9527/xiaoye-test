/**
 * 派发器逻辑
 */

import reducer from "src/pages/vueTest/counter/mixins/reducer.js";
import { PLUS, MINUS } from "src/pages/vueTest/counter/mixins/counter.js";


export default (ctx) => {
  // ctx就是this。 ctx.$data 是component的index.vue中data值result
  const { plus, minus } = reducer(ctx.$data);
  return function (type, ...args) {
    switch (type) {
      case PLUS:
        ctx.result = plus(...args);
        break;
      case MINUS:
        ctx.result = minus(...args);
        break;
      default:
        break;
    }
  };
};
