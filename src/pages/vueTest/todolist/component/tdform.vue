<!-- 输入框 -->
<template>
  <div>
    <form @submit="submitText">
      <input type="text" v-model.trim="todoText" placeholder="请添加..." />
    </form>
  </div>
</template>
    
<script>
export default {
  name: "TdForm",
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    /**
     * 提交表单事件
     * @param {*} e 事件对象
     */
    submitText(e) {
      // 阻止表单默认刷新、跳转行为
      e.preventDefault();
      if (this.todoText === 0) {
        return;
      }
      // 提交添加内容
      this.$emit("dispatch", "ADD", {
        id: Date.now(), // 时间戳
        text: this.todoText, // 添加内容
        completed: false, // 默认状态未完成
      });
      // 清空表单
      this.todoText = "";
    },
  },
};
</script>