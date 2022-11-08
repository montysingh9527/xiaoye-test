<template>
  <div>
    <Button-Index
      @btnActive="BtnActive"
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
    BtnActive(idx) {
      this.curinx = idx;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
