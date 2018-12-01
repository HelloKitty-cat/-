<template>
  <div class="topicWrap">
    <header class="topicHeader">
      <div class="topicContent">
        <span><i class="iconfont icon-shouye"></i></span>
        <span class="title"></span>
        <span><i class="iconfont icon-sousuo"></i></span>
        <span><i class="iconfont icon-gouwuche"></i></span>
      </div>
    </header>
    <div class="MoveContent">
        <div class="topic">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/9c9bbc692ff2b98e729a67ecca003dff.jpg" alt="">
              </div>
              <div class="swiper-slide">slider2</div>
              <div class="swiper-slide">slider3</div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    mounted () {
      new Swiper('.swiper-container', {
        slidesPerView : 1,
        spaceBetween : 20,
        loop : true,
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";

  .topicWrap{
    width: 100%;
    height: 100%;
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
    .MoveContent{
      margin-top: 88/@rem;
      width: 100%;
      height: 100%;
      .topic{
        width: 100%;
        height: 385/@rem;
        background: #fff;
        padding: 24/@rem 0;
        .swiper-container{
          width: 100%;
          height: 100%;
          background: #fff;
            .swiper-slide{
              background: pink;
              img{
                width: 100%;
              }
            }
        }
      }
    }
  }
</style>
