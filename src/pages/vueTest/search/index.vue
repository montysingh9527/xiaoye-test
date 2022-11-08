<!-- 按钮点击切换 -->
<template>
  <div class="q-ma-md">
    <input @input="searchAction($event)" type="text" placeholder="请搜索" />
    <!-- 搜索结果展示 -->
    <ul v-if="searchResult.length > 0">
      <li v-for="(item, index) of searchResult" :key="index">
        <span>{{ item.teamName }}</span>
      </li>
    </ul>
    <!-- 未搜索展示全部 -->
    <ul v-else>
      <li v-for="(item, index) of courseData" :key="index">
        <span>{{ item.teamName }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import courseData from "src/pages/vueTest/search/config/mock.js";
import { throttle } from "src/utils/utils.js";
export default {
  name: "Search",
  data() {
    return {
      // 数据
      courseData,
      // 搜索结果
      searchResult: [],
    };
  },
  created() {
    // 节流
    this.searchAction = throttle(this.searchAction, 3000);
  },
  methods: {
    searchAction(event) {
      // 获取input输入的值
      const inputValue = event.target.value;
      this.searchResult = this.courseData.filter((item) => {
        // 如果输入的值在当前项中，则返回
        if (item.teamName.includes(inputValue)) {
          return item;
        }
      });
    },
  },
};
</script>

  