<template>
  <div>
    <div class="header">购物车</div>
    <ul class="explain">
      <li>
        <span><i class="iconfont icon-kongxinyuan"></i></span>
        <span>30天无忧退货</span>
      </li>
      <li>
        <span><i class="iconfont icon-kongxinyuan"></i></span>
        <span>48小时快速退款</span>
      </li>
      <li>
        <span><i class="iconfont icon-kongxinyuan"></i></span>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="bgImg">
      <img src="../../common/images/cart.png" alt="">
    </div>
    <div class="addItems">
      <span>去添加点什么吧</span>
      <a href="javascript:;" @click="$router.push('/login')">
        登录
      </a>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";
  .header{
    width: 100%;
    height: 88/@rem;
    background: #fff;
    font-size: 36/@rem;
    text-align: center;
    line-height: 88/@rem;
  }
  .explain{
    width: 100%;
    box-sizing: border-box;
    padding: 0 30/@rem;
    display: flex;
    margin-top: 20/@rem;
    li{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-size: 24/@rem;
        color: #333;
      }
      .icon-kongxinyuan{
        display: flex;
        align-items: center;
        font-size: 10/@rem;
        color: #333;
        margin-right: 5px;
      }
    }
  }
  .bgImg{
    text-align: center;
    width: 100%;
    height: 300/@rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .addItems{
    width: 100%;
    height: 170/@rem;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    span{
      font-size: 28/@rem;
      color: #999;
    }
    a{
      margin: 40/@rem auto 0;
      display: block;
      font-size: 28/@rem;
      width: 480/@rem;
      height: 92/@rem;
      background: #b4282d;
      color: #fff;
      text-align: center;
      line-height: 92/@rem;
    }
  }
</style>
