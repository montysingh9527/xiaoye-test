<!-- 计算结果 -->
<template>
  <h3>{{ result }}</h3>
</template>

<script>
export default {
  name: "CalResult",
  props: {
    result: Number,  // 计算结果
  },
};
</script>