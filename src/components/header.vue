<template>
    <div class="header-bar">
        <div><</div>
        <div>{{ title }}</div>
        <div>></div>
    </div>
</template>
<script>
export default {
  name: "HeaderBar",
  data() {
    return {
        title: "首页"
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.header-bar {
    display: flex;
    justify-content: space-between;
    background-color: var(--f-color-accent);
    padding: 0 10px;
    margin-bottom: 10px;
    height: 30px;
    line-height: 30px;
}
</style>
