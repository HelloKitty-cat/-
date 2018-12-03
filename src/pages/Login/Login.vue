<template>
  <div>
    <header class="topicHeader">
      <div class="topicContent">
        <span @click="$router.replace('/home')"><i class="iconfont icon-shouye"></i></span>
        <span class="title"></span>
        <span @click="$router.replace('/search')"><i class="iconfont icon-sousuo"></i></span>
        <span @click="$router.replace('/cart')"><i class="iconfont icon-gouwuche"></i></span>
      </div>
    </header>

    <div class="content">
      <div class="logoWrap">
        <img src="../../common/images/logo.png" alt="">
      </div>
      <router-view :isPhone="isPhone"/>
      <div class="btns" v-show="$route.path === '/login'">
        <a href="javascript:;" @click="$router.push('/login/phone')">
          <span><i class="iconfont icon-shouji"></i></span>
          <span>手机号码登录</span>
        </a>
        <a href="javascript:;" @click="$router.push('/login/email')">
          <span><i class="iconfont icon-youxiang"></i></span>
          <span>邮箱账号登录</span>
        </a>
      </div>
    </div>

    <div class="thirdWrap" v-show="$route.path === '/login'">
      <div class="itemWrap">
        <span><i class="iconfont icon-QQ"></i></span>
        <span>微信</span>
      </div>
      <div class="itemWrap">
        <span><i class="iconfont icon-WeChat"></i></span>
        <span>微信</span>
      </div>
      <div class="itemWrap">
        <span><i class="iconfont icon-weibo"></i></span>
        <span>微信</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isPhone: false
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";

  .topicHeader{
    width: 100%;
    height: 88/@rem;
    background: #fafafa;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    .topicContent{
      height: 100%;
      box-sizing: border-box;
      padding: 0 20/@rem;
      .iconfont{
        position: absolute;
        top: 50%;
        font-size: 44/@rem;
        transform: translateY(-50%);
      }
      .icon-shouye{
        left: 25/@rem;
      }
      .title{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        display: inline-block;
        width: 172/@rem;
        height: 54/@rem;
        background: url("../../common/images/icons.png");
        background-repeat: no-repeat;
        background-position-y: -126/@rem;
      }
      .icon-sousuo{
        right: 120/@rem;
      }
      .icon-gouwuche{
        right: 40px;
      }
    }
  }
  .content{
    margin-top: 88/@rem;
    width: 100%;
    height: 633/@rem;
    .logoWrap{
      width: 100%;
      height: 348/@rem;
      box-sizing: border-box;
      padding: 120/@rem 0;
      text-align: center;
      img{
        height: 100%;
      }
    }
    .btns{
      width: 100%;
      height: 216/@rem;
      box-sizing: border-box;
      padding: 0 42/@rem;
      a{
        display: flex;
        width: 100%;
        height: 88/@rem;
        background: #b4282d;
        color: #fff;
        font-size: 28/@rem;
        align-items: center;
        justify-content: center;
        border: 1px solid #b4282d;
        .icon-shouji{
          font-size: 40/@rem;
          margin-right: 20/@rem;
        }
        .icon-youxiang{
          font-size: 40/@rem;
          margin-right: 20/@rem;
        }
        &:nth-child(2){
          margin-top: 30/@rem;
          background: none;
          color: #b4282d;
        }
      }
    }
  }
  .thirdWrap{
    width: 100%;
    height: 40/@rem;
    position: absolute;
    bottom: 80/@rem;
    padding: 0 60/@rem;
    box-sizing: border-box;
    left: 0;
    display: flex;
    .itemWrap{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      flex: 1;
      font-size: 26/@rem;
      border-right: 1px solid #333;
      &:nth-child(3){
        border-right: none;
      }
      .iconfont{
        font-size: 26/@rem;
        margin-right: 8/@rem;
      }
    }
  }
</style>
