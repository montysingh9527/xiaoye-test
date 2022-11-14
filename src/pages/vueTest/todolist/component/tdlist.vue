<!-- 列表项 -->
<template>
  <div>
    <ul>
      <list-item
        v-for="(item, index) of todoData"
        :key="index"
        :item="item"
        @handleItem="handleItem"
      />
    </ul>
  </div>
</template>
      
<script>
import ListItem from "src/pages/vueTest/todolist/component/listitem.vue";
export default {
  name: "TdList",
  components: {
    ListItem,
  },
  props: {
    todoData: Array,
  },
  methods: {
    /**
     * 提交dispatch事件
     * @param  {...any} args 
     */
    handleItem(...args) {
      this.$emit("dispatch", ...args);
    },
  },
};
</script>