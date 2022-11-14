<!-- 派发器练习——TODOList 主页面-->

<template>
  <div class="q-ma-md">
    <TdTitle :title="title" />
    <TdForm  @dispatch="dispatch" />
    <TdList :todoData="todoData" @dispatch="dispatch" />
  </div>
</template>
  
<script>
import TdForm from "src/pages/vueTest/todolist/component/tdform.vue";    // 输入框
import TdList from "src/pages/vueTest/todolist/component/tdlist.vue";    // 展示添加项
import TdTitle from "src/pages/vueTest/todolist/component/tdtitle.vue";  // 标题
import dispatch from "src/pages/vueTest/todolist/mixins/dispatch.js";   // 主要逻辑处理
export default {
  name: "TodoList",
  components: {
    TdForm,
    TdList,
    TdTitle,
  },
  data() {
    return {
      title: "Todo List",   // 标题
      todoData: [],    // 列表项
    };
  },
  methods :{
    dispatch(...args){
        dispatch(this)(...args)
    }
  }
};
</script>