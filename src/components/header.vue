<template>
    <div class="header-bar">
        <q-btn @click="$router.go(-1)" class="dense" icon="bi-chevron-left" dense flat ></q-btn>
        <div>{{ title }}</div>
        <q-btn to="/home" icon="bi-chevron-right" dense flat ></q-btn>
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
  watch:{
    "$router":{
      immediate: true,
      handler(old){
        console.log(old)
      }
    }
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
    /* 动画 */
    animation: pulse 2s linear infinite;
}
@keyframes pulse {
    from {
        filter: hue-rotate(0);
    }
    to {
        filter: hue-rotate(360deg);
    }
}
</style>
