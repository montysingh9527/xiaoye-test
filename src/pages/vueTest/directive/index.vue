<!-- 
    自定义指令使用directive
 -->
 <template>
  <!-- 使用v-nav-current指令 -->
  <div class="nav-bar"
    v-nav-current="{
      curIdx: curIdx,
      className: 'nav-item',
      activeClass: 'nav-current',
    }"
  >
    <div class="nav-item" v-for="(item, index) of items"
      :key="index" @click="changNav(index)">
      {{ item }}
    </div>
  </div>
</template>
<script>
import navCurrent from "src/pages/vueTest/directive/mixin/directive.js"; // 引入自定义指令
export default {
  name: "Directive",
  // 注册自定义指令
  directives: {
    navCurrent,
  },
  data() {
    return {
      curIdx: 0,
      items: ["选项1", "选项2", "选项3", "选项4"],
    };
  },
  methods: {
    /**
     * 点击事件
     * @param {*} index 点击位置 
     */
    changNav(index) {
      this.curIdx = index;
    },
  },
};
</script>
  
<style scoped lang="scss">
.nav-bar {
  height: 50px;
  width: 300px;
  margin: 100px auto;
  border: 1px solid #000;
  cursor: pointer;
  .nav-item {
    float: left;
    width: 25%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    &.nav-current {
      background-color: #000;
      color: #fff;
    }
  }
}
</style>