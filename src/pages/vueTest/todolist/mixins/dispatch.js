/**
 * 方法汇总
 */
import { ADD, REMOVE, COMPLETED } from "src/pages/vueTest/todolist/mixins/todolist.js";
import reducer from "src/pages/vueTest/todolist/mixins/todoreducer.js";

export default (ctx) => {
  const { addItem, removeItem, changeCompleted } = reducer(ctx.todoData);
  return function (type, args) {
    console.log('==dispatch====type,args===>>>>',type,args)
    switch (type) {
      case ADD:
        ctx.todoData = addItem(args);
        break;
      case REMOVE:
        ctx.todoData = removeItem(args);
        break;
      case COMPLETED:
        ctx.todoData = changeCompleted(args);
        break;
      default:
        break;
    }
  };
};
