<template>
  <div class="itemWrap">
    <div class="categoryModule">
      <img src="https://yanxuan.nosdn.127.net/92aefb1aaefff5f50641f0f7997112ee.jpg" alt="">
    </div>
    <div class="swiper-container-food">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="imgWrap">
            <img src="../../common/images/loading.gif" alt="">
          </div>
          <p class="info ellipsis">10卷/提 谷风一木 小卷纸</p>
          <p class="price">￥27.9</p>
          <span class="more">爆品</span>
        </div>
        <div class="swiper-slide">
          <div class="imgWrap">
            <img src="../../common/images/loading.gif" alt="">
          </div>
          <p class="info ellipsis">10卷/提 谷风一木 小卷纸</p>
          <p class="price">￥27.9</p>
          <span class="more">爆品</span>
        </div>
        <div class="swiper-slide">
          <div class="imgWrap">
            <img src="../../common/images/loading.gif" alt="">
          </div>
          <p class="info ellipsis">10卷/提 谷风一木 小卷纸</p>
          <p class="price">￥27.9</p>
          <span class="more">爆品</span>
        </div>
        <div class="swiper-slide">
          <div class="imgWrap">
            <img src="../../common/images/loading.gif" alt="">
          </div>
          <p class="info ellipsis">10卷/提 谷风一木 小卷纸</p>
          <p class="price">￥27.9</p>
          <span class="more">爆品</span>
        </div>
        <div class="swiper-slide">
          <div class="imgWrap">
            <img src="../../common/images/loading.gif" alt="">
          </div>
          <p class="info ellipsis">10卷/提 谷风一木 小卷纸</p>
          <p class="price">￥27.9</p>
          <span class="more">爆品</span>
        </div>
        <div class="swiper-slide">
          <div class="imgWrap">
            <img src="../../common/images/loading.gif" alt="">
          </div>
          <p class="info ellipsis">10卷/提 谷风一木 小卷纸</p>
          <p class="price">￥27.9</p>
          <span class="more">爆品</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    mounted () {
      new Swiper('.swiper-container-food',{
        slidesPerView : 3.2,
        spaceBetween : 20,
      })
    }
  }
</script>

<style lang="less">

  @import "../../common/stylus/mixins";

  .itemWrap{
    width: 100%;
    height: 778/@rem;
    background: #fff;
    .categoryModule{
      width: 100%;
      height: 370/@rem;
      img{
        width: 100%;
      }
    }
    .swiper-container-food{
      margin-top: 22/@rem;
      height: 370/@rem;
      .swiper-slide{
        background: pink;
        &:nth-child(1){
          margin-left: 20/@rem;
        }
        .imgWrap{
          width: 100%;
          height: 219/@rem;
          background-color: #f4f4f4;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .info{
          margin-left: 12/@rem;
          font-size: 24/@rem;
          height: 40/@rem;
          color: rgb(51, 51, 51);
        }
        .price{
          margin: 12/@rem;
          font-size: 24/@rem;
          color: red;
        }
        .more{
          margin-left: 12/@rem;
          display: block;
          width: 72/@rem;
          height: 30/@rem;
          background: rgb(229, 104, 109);
          font-size: 22/@rem;
          color: #fff;
          font-weight: bold;
          text-align: center;
          line-height: 30/@rem;
        }
      }
    }
  }


</style>
