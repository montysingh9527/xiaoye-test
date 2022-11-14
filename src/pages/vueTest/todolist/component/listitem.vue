<!-- todolist 每一项 -->

<template>
  <li>
    <input
      type="checkbox"
      :checked="item.completed ? 'checked' : ''"
      @click="handleItem('COMPLETED', item.id)"
    />
    <span :class="{ completed: item.completed }">
      {{ item.text }}
    </span>
    <button @click="handleItem('REMOVE', item.id)">删除</button>
  </li>
</template>
          
<script>
export default {
  name: "ListItem",
  props: {
    item: Object,
  },
  methods: {
    handleItem(...args) {
      console.log('==listitem.vue==...args===>',...args)
      this.$emit("handleItem", ...args);
    },
  },
};
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
