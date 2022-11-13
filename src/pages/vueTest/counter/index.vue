<!-- 
组件内部的叫数据 data
组件外部传递的叫属性 props   数据是不能够修改的，想要修改可以使用data中的数据接收 datalist:this.dataitem


计算器—练习派发器思想
组件  页面组件   IndexPage   块组件的容器
      块组件 ——> 组件出口 + 子组件
      数据保存  + 逻辑
      Counter ——> index + Result + Button
                          视图 ? 数据——> 属性
                                方法——> 事件传递 ——> 块组件

派发器 ——> 模式 ——> 改造 ——> 组件的逻辑部分

type ——> 事件 ——> 逻辑(reducer) ——> type ——> 派发器(dispatch) ——> 数据的更改

 -->
 <template>
    <div>
        <counter/>
    </div>
  </template>
  <script>
  import counter from "src/pages/vueTest/counter/component/counter.vue"; 
  export default {
    name: "CounterIndex",
    components:{
      counter
    },
  };
  </script>