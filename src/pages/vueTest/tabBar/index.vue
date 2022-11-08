<!-- tab栏，点击当前项位置居中，且可拖动-->
<template>
  <div class="boxsize" @mousedown="tabdowm">
    <div class="box" :style="{ left: leftwidth + 'px' }">
      <div
        @click="tabative(index)"
        :class="{ ative: isactive == index }"
        v-for="(item, index) in list"
        :key="index"
        class="test-left"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { list } from "src/pages/vueTest/tabBar/config/mock.js"
export default {
  name: "home",
  data() {
    return {
      list,
      // 当前选中项
      isactive: 0,
      // left偏移量
      leftwidth: 0,
      // 整个dom宽度
      dom_width: 0,
      // 容器宽度width
      wrap_width: 0,
      // 每个tab left/width
      sizes: [],
      // 右边
      clienleft: 0,
      // 鼠标按下
      isbtn: false,
    };
  },
  created() {
    // 鼠标抬起事件
    document.addEventListener("mouseup", this.tabseup);
    // 鼠标移动事件
    document.addEventListener("mousemove", this.tabmove);
  },
  watch: {
    // 监听下标变动
    isactive() {
      this.init();
    },
  },

  methods: {
    /**
     * 初始化宽度
     */
    init() {
      let boxsize = document.querySelector(".boxsize");
      if (!boxsize || !boxsize.querySelectorAll) return;
      this.wrap_width = boxsize.clientWidth;
      let dom = boxsize.querySelectorAll(".test-left");
      for (let i = 0; i < dom.length; i++) {
        this.sizes.push({
          width: dom[i].offsetWidth,
          left: dom[i].offsetLeft,
        });
      }
      // dom总和
      this.dom_width =
        this.sizes[this.sizes.length - 1].width +
        this.sizes[this.sizes.length - 1].left;
    },
    /**
     * 鼠标点击
     */
    tabdowm(e) {
      this.clienleft = e.clientX;
      this.isbtn = true;
    },
    /**
     * 鼠标抬起
     */
    tabseup() {
      this.isbtn = false;
    },
    /**
     * 点击tab栏
     */
    tabative(index) {
      let left = 0;
      this.isactive = index;

      // console.log('===右边==',this.sizes[index].left)
      // console.log('=====<<<<<<',this.clienleft)
      // 容器的一半
      let _warp = this.wrap_width / 2;
      // 最大移动距离 也就是被遮挡的部分
      let max_left = 0 - (this.wrap_width - this.dom_width);
      // console.log('===>>>',this.leftwidth,_warp)
      // 当前点击的tab栏小于容器一半不移动
      if (this.sizes[index].left < _warp) return;
      // 当前下标< 点击的下标，向右移动
      if (this.isactive < index) {
        // this.handleft(this.leftwidth)
        left += this.sizes[index].width;
      } else if (this.leftwidth < max_left) {
        // this.handleft(this.leftwidth - 80)
        left -= this.sizes[index].width;
      }

      this.leftwidth = left;
      console.log("偏移量", this.leftwidth);
      // console.log('==当前点击index==', index,_warp)
    },
    /**
     * 计算移动距离
     */
    handleft(left) {
      let wrap_left;
      // 最大移动距离 也就是被遮挡的部分
      let max_left = 0 - (this.wrap_width - this.dom_width);
      // console.log('最大偏移量',max_left)
      console.log("====000000====", max_left, left);
      if (left < 0) {
        wrap_left = 0;
      }
      if (Math.abs(left) < max_left) {
        wrap_left = max_left;
      }
      this.leftwidth = wrap_left;
    },
    /**
     * 鼠标移动
     */
    tabmove(e) {
      this.clientX = 0 - (this.clienleft - e.clientX);
      // console.log('2222',this.clientX)
    },
  },
  destroyed() {
    // 鼠标离开事件
    document.removeEventListener("mouseup", this.tabseup);
    // 鼠标移动事件
    document.removeEventListener("mousemove", this.tabmove);
  },
};
</script>
  <style lang="scss">
.boxsize {
  overflow: hidden;
  width: 400px;
  height: 50px;
  margin: 50px auto;
  border: 5px solid #aaa;
  background: #00ff00;
  cursor: pointer;
  position: relative;
  .box {
    display: flex;
    position: absolute;
    width: 5000px;
    .test-left {
      padding: 0 10px;
      margin: 0 5px;
      line-height: 40px;
      &::-webkit-scrollbar {
        display: none;
      }
      &.ative {
        border-radius: 15px;
        background: red;
      }
    }
  }
}
</style>
  