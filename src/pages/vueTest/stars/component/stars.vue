<!-- 
    Stars 五角星UI组件
-->
<template>
  <div class="ui-stars">
    <span
      @click="setStarNum(number)"
      v-for="number in 5"
      :key="number"
      :class="['icon-star', number <= starNum ? 'active' : '']"
      :style="{ fontSize: size + 'px' }"
    >
    </span>
  </div>
</template>
  
  <script>
export default {
  name: "Stars",
  props: {
    // 初始值点亮星星图标个数
    num: {
      type: Number,
      default: 0,
    },
    // 星星图标大小
    size: {
      type: Number,
      default: 16,
    },
  },
  data() {
    return {
      // 将初始值存入
      starNum: this.num,
    };
  },
  methods: {
    /**
     * 点击事件
     * @param {*} number  点击位置
     */
    setStarNum(number) {
      // 点亮星星个数
      this.starNum = number;
      // 将点击数量传递给父组件
      this.$emit("getStarNum", this.starNum);
    },
  },
};
</script>
<style lang="scss" scoped>
// 导入bootstrap字体图标
@import url(http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

// 实体星星
.icon-star {
  &.active {
    color: #ffff00;
  }
}
// 实体星星
.icon-star:before {
  content: "\f005";
}

// 空星星
.icon-star-empty:before {
  content: "\f006";
}
.icon-star-half:before {
  content: "\f089";
}
// 一半亮一半灰星星
.icon-star-half-full:before,
.icon-star-half-empty:before {
  content: "\f123";
}
</style>
    