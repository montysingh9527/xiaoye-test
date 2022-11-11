<!--使用 Stars 五角星UI组件 -->
<template>
  <div>
    <Starts :num="starNumber" :size="size" @getStarNum="getStarNum"></Starts>
  </div>
</template>
  
<script>
import Starts from "src/pages/vueTest/stars/component/stars.vue";
export default {
  name: "StarsIndex",
  components: {
    Starts,
  },
  data() {
    return {
      // 点亮数量
      starNumber: 0,
      // 图标大小
      size: 30,
    };
  },
  methods: {
    // 子组件提交的事件
    getStarNum(number) {
      // 点击数量
      this.starNumber = number;
    },
  },
};
</script>