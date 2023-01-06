<!--
 使用自定义指令实现 
 思路：鼠标移动到前面的图片，将背后的图片放大scale
-->
<template>
  <!-- 使用自定义指令 v-magnifier -->
  <div
    v-magnifier
    class="img-wrap"
    :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
  >
   <!-- 背后图片 -->
    <a
      class="mag-wrap"
      :href="link"
      :target="blank ? '_blank' : ''"
      :style="{ width: magWidth + 'px', height: magHeight + 'px' }"
    >
      <img
        class="mag-img"
        :src="imgUrl"
        :alt="imgAlt"
        :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
      />
    </a>
    <!-- 前面的图片 -->
    <a class="img-lk" :href="link">
      <img class="static-img" :src="imgUrl" :alt="imgAlt" />
    </a>
  </div>
</template>

<script>
import magnifier from "src/pages/vueTest/magnifier/directive/index.js";
export default {
  name: "magnifiers",
  // 注册自定义指令
  directives:{
    magnifier
  },
  props: {
    // 图片宽度
    imgWidth: {
      type: Number,
      default: 375,
    },
    // 图片高度
    imgHeight: {
      type: Number,
      default: 500,
    },
    // 背后图片宽度
    magWidth: {
      type: Number,
      default: 150,
    },
    // 背后图片高度
    magHeight: {
      type: Number,
      default: 150,
    },
    // 链接是否可跳转
    blank: {
      type: Boolean,
      default: true,
    },
    // 跳转链接
    link: String,
    // 图片链接
    imgUrl: String,
    // 图片提示
    imgAlt: String,
  },
};
</script>

<style lang="scss" scoped>
.img-wrap {
	position: relative;
	border: 1px solid #ddd;
	box-shadow: 0 0 5px #999;
	// 前面图片宽度
	.static-img {
		width: 100%;
	}
	// 背后图片绝对定位 且先隐藏
	.mag-wrap {
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		background-color: #fff;
		box-shadow: 0 0 3px #ccc;
		border-radius: 50%;
		cursor: move;
		overflow: hidden;
		// 显示图片 且 放大
		&.show {
			display: block;
			transform: scale(1.5);
		}
		.mag-img {
			position: absolute;
			top: 0;
			left: 0;
		}
	}
}
</style>