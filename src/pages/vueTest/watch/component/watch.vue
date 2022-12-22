<template>
  <div class="q-ma-md q-gutter-md">
    <div>
      <p>{{ serchFrom.name }}</p>
      <p>{{ serchFrom.num }}</p>
      <p>{{ serchFrom.page }}</p>
      <button @click="setName">修改name</button>
      <button @click="setAge">修改age</button>
      <button @click="setPage">修改page</button>
    </div>
    <q-separator color="orange" />
    <div class="q-mt-md">空白区</div>
  </div>
</template>
<script>
import { watchParms } from "../mixins/watch.js";
export default {
  data() {
    return {
      serchFrom: {
        name: "vic",
        num: 27,
        page: 1,
      },
    };
  },
  watch: {
    ...watchParms({
      key: ["name", "page"],
      obj: "serchFrom",
      cb(){
        this.init();
      }
    }),
  },
  methods: {
    // 修改serchFrom名称
    setName() {
      this.serchFrom.name = "Asu" + parseInt(Math.random() * 1000);
    },
    // 修改serchFrom年龄
    setAge() {
      this.serchFrom.num += 5;
    },
    // 修改serchFrom分页
    setPage() {
      this.serchFrom.page += 1;
    },
    init() {
      console.log("触发了watch。。。");
    },
  },
};
</script>