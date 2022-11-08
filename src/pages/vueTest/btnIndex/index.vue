<!-- 按钮点击切换 -->
<template>
  <div @click="checkActive($event)">
    <Button-Index
      v-for="(item, index) of subjects"
      :key="index"
      :items="item"
      :curInx="curinx"
      :index="index"
    />
  </div>
</template>
<script>
import ButtonIndex from "src/pages/vueTest/btnIndex/component/button.vue";
export default {
  name: "BtnIndex",
  components: { ButtonIndex },
  data() {
    return {
      subjects: ["Vue", "React", "Angular"],
      curinx: 0,
    };
  },
  created() {},
  methods: {
    checkActive(event) {
      // 获取当前点击的元素 。 保存当前className
      const tar = event.target,
        tarName = tar.className;
      if (tarName == "btn-content") {
        // 获取子元素data-index值
        const idx = parseInt(tar.dataset.index);
        this.curinx = idx;
        console.log(idx);
      }
    },
  },
};
</script>

<style scoped lang="scss">
</style>
