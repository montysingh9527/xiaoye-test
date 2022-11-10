<template>
  <div>
    <table border="1">
      <tr v-for="(item, index) of orderData" :key="index">
        <td>{{ item.orderId }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <!-- 使用filterStatusStyle设置class类 
        使用filterStatus设置状态文字
        -->
        <td :class="item.status | filterStatus | filterStatusStyle">
          {{ item.status | filterStatus }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import orderData from "src/pages/vueTest/filters/mock/mock.js"; // 引入mock数据
import filterStatus from "src/pages/vueTest/filters/filter/filter.js";  // 引入过滤器
export default {
  name: "filters",
  data() {
    return {
      orderData,
    };
  },
  // 注册过滤器
  filters: filterStatus,
};
</script>

<style scoped lang="scss">
table {
  width: 500px;
  margin: 20px auto;
  // 合并表格的边框
  border-collapse: collapse;
  text-align: center;
  .not-pay {
    color: #ff0000;
  }
  .not-send {
    color: #77eeb0;
  }
  .not-receive {
    color: #315b99;
  }
  .not-comment {
    color: #e066af;
  }
}
</style>
