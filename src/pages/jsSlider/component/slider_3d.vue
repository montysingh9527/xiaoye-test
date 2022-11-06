<template>
    <div class="container">
      <div class="slider-3d">
        <div class="slider-item first">
          <a href="#">
            <img
              src="https://i01.appmifile.com/webfile/globalweb/picture/SHOUXIEBAN.png"
              alt=""
            />
          </a>
        </div>
        <div class="slider-item second right">
          <a href="#">
            <img
              src="https://i01.appmifile.com/webfile/globalweb/picture/fengshan2p.jpg "
              alt=""
            />
          </a>
        </div>
        <div class="slider-item third">
          <a href="#">
            <img
              src="https://i01.appmifile.com/webfile/globalweb/picture/xiaomi-smart-dehumidifier.jpg "
              alt=""
            />
          </a>
        </div>
        <div class="slider-item second left">
          <a href="#">
            <img
              src="https://i01.appmifile.com/webfile/globalweb/picture/chongwu.jpg "
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "slider3D",
    components: {},
    props: {},
    data() {
      return {
        tiem: null, // 定时器
        classNames: [], // 存放类名
        oSliderItems: [], // 获取元素
        oSliderItem: null,  // 存放元素节点
      };
    },
    computed: {},
    watch: {},
    created() {
      // 定时切换类名
      this.sliderAction();
    },
    mounted(){
      // 获取元素节点
      this.collectClassNames();
    },
    methods: {
      /**
       * 获取类名
       */
      collectClassNames() {
        this.oSliderItems = document.querySelectorAll(".slider-item");
        this.oSliderItem = null;
        for (let i = 0; i < this.oSliderItems.length; i++) {
          this.oSliderItem = this.oSliderItems[i];
          this.classNames.push(this.oSliderItem.className);
        }
      },
      /**
       * 类名切换
       */
      setClassNames() {
        // 将最后一个类名添加到第一个位置 。 类名循环转圈
        this.classNames.unshift(this.classNames.pop());
        // console.log('=classNames===',this.classNames)
        this.render();
      },
      /**
       * 定时切换类名
       */
      sliderAction() {
        clearInterval(this.tiem);
        this.tiem = setInterval(this.setClassNames, 2000);
      },
      /**
       * 渲染
       */
      render() {
        this.oSliderItem = null;
        for (let i = 0; i < this.oSliderItems.length; i++) {
          this.oSliderItem = this.oSliderItems[i];
          this.oSliderItem.className = this.classNames[i];
          console.log('=slider=',this.oSliderItem.className)
        }
      },
    },
    beforeDestroy(){
      if(this.tiem){
          clearInterval(this.tiem)
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .slider-3d {
    position: relative;
    width: 1000px;
    height: 500px;
    margin: 100px auto;
    img {
      display: block;
      width: 100%;
    }
    .slider-item {
      position: absolute;
      box-shadow: 10px 20px 10px #999;
      transition: all 0.5s linear;
      &.first {
        //   top: 80px;
        //   left: 200px;
        transform: translate3d(200px, 80px, 0);
        width: 600px;
        z-index: 3;
      }
      &.third {
        width: 300px;
        // left: 350px;
        // top: 50px;
        transform: translate3d(350px, 50px, 0);
        opacity: 0.4;
        z-index: 1;
      }
      &.second {
        width: 400px;
        // top: 138px;
        opacity: 0.6;
        z-index: 2;
        &.left {
          left: 0;
          transform: translate3d(0, 138px, 0);
        }
        &.right {
          // left: 600px;
          transform: translate3d(600px, 138px, 0);
        }
      }
    }
  }
  </style>
  