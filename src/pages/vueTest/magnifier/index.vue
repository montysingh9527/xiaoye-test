<!-- 
- 放大镜特效：使用自定义指令实现
- 	思路：两张相同图片重叠，鼠标触摸将图片scale放大
 -->
<template>
  <div class="wrapper">
    <magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    />
  </div>
</template>

<script>
import magnifier from "src/pages/vueTest/magnifier/component/magnifier.vue";
export default {
  name: "MagnifierIndex",
  components: {
    magnifier,
  },
  data() {
    return {
      imgUrl: "https://openfile.meizu.com/group1/M00/08/D9/Cgbj0WFD_OWAGpOBAAJ5m6qjsic201.png680x680.jpg",
      imgAlt: "魅族",
      blank: true,
      link: "https://www.meizu.com/",
      imgWidth: 250,
      imgHeight: 300,
      magWidth: 100,
      magHeight: 100,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 375px;
  margin: 80px;
}
</style>