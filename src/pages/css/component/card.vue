<template>
  <div class="card-content">
    <div class="card">
      <span class="line left-line"></span>
      <span class="line right-line"></span>
      <span class="line top-line"></span>
      <span class="line bottom-line"></span>
      <div class="img-box">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div class="content-box">
        <span>一个科技的时代</span>
        <span>—— 需要科技感 ——</span>
        <p>我们需要科技</p>
        <p>科技展望未来</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-content {
  //   height: 100vh;
  //   background-color: #252a30;
  //   box-sizing: border-box;
  .card {
    position: relative;
    width: 400px;
    height: 200px;
    box-shadow: 0 0 3px #b1db56;
    margin: 200px auto;
    cursor: pointer;
    transition: box-shadow 0.3s; // box-shoadow设置过渡效果
    img {
      width: 100%;
    }

    div {
      float: left;
    }
    .img-box {
      width: 200px;
      height: 200px;
      padding: 35px;
    }
    .img-box img {
      transition: transform 0.3s;
    }
    .content-box {
      width: 200px;
      height: 200px;
      text-align: center;
    }
    .content-box span {
      color: #b1db56;
    }
    .line{
        display: block;
        position: absolute;
        color:#b1db56;
        transition: all 0.3s;
        &.top-line,
        &.bottom-line ,
        &.left-line,
        &.right-line {
            width:0;
            height: 0;
        }
        &.top-line {
            top: -1px;
            right: -250px;
            border-top: 1px solid #b1db56;
        }
        &.bottom-line{
            bottom: -1px;
            left: -250px;
            border-top: 1px solid #b1db56;
        }
        &.left-line {
            left: -1px;
            top: -150px;
            border-top: 1px solid #b1db56;
        }
        &.right-line{
            right: -1px;
            bottom: -150px;
            border-top: 1px solid #b1db56;
        }

    }
    &:hover {
      box-shadow: 0 0 15px #b1db56;
    }
    &:hover .img-box img {
        transform: rotate(360deg);
    }
    &:hover .line.top-line {
        right: 0;
    }
    &:hover .line.bottom-line {
        left: 0;
    }
    &:hover .line.left-line {
        top: 0;
    }
    &:hover .line.right-line {
        bottom: 0;
    }
    &:hover .line.top-line,
    &:hover .line.bottom-line {
        width: 399px;
    }
    &:hover .line.left-line,
    &:hover .line.right-line{
        height: 199px;
    }
  }
}
</style>
