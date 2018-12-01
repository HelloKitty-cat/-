<template>
  <div>
    <div class="newItems">
      <div class="newItemsWrap">
        <span>新品首发</span>
        <div class="findAll">查看全部 ></div>
      </div>
      <div class="swiper-container-Item">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(list,index) in newItemNewUserList" :key="index">
            <div class="imgWrap">
              <img v-lazy="list.listPicUrl" alt="">
            </div>
            <span class="news" >新品</span>
            <p class="ellipsis foods">{{list.name}}</p>
            <p class="info ellipsis">{{list.simpleDesc}}</p>
            <p class="price">￥{{list.retailPrice}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="newItems">
      <div class="newItemsWrap">
        <span>人气推荐.好物精选</span>
        <div class="findAll">查看全部 ></div>
      </div>
      <div class="swiper-container-Item-bottom">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(list,index) in popularItemList" :key="index">
            <div class="imgWrap">
              <img v-lazy="list.listPicUrl" alt="">
            </div>
            <span class="news" >新品</span>
            <p class="ellipsis foods">{{list.name}}</p>
            <p class="info ellipsis">{{list.simpleDesc}}</p>
            <p class="price">￥{{list.retailPrice}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['newItemNewUserList','popularItemList'])
    },
    mounted () {
      // 新人下的list列表
      this.$store.dispatch('reqNewItemNewUserList',() =>{
        this.$nextTick(() =>{
          new Swiper('.swiper-container-Item',{
            slidesPerView : 2.5,
            spaceBetween : 20,
          })
        })
      });

      this.$store.dispatch('reqPopularItemList', () => {
        this.$nextTick(() =>{
          new Swiper('.swiper-container-Item-bottom',{
            slidesPerView : 2.5,
            spaceBetween : 20,
          })
        })
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";

  .newItems {
    width: 100%;
    height: 785/@rem;
    background: #fff;
    .newItemsWrap {
      width: 100%;
      height: 260/@rem;
      background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: relative;
      span {
        font-size: 36/@rem;
        color: #8BA0B6;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
      }
      .findAll {
        text-align: center;
        width: 240/@rem;
        height: 56/@rem;
        line-height: 53/@rem;
        background: #D8E5F1;
        font-size: 28/@rem;
        color: #8BA0B6;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .swiper-container-Item-bottom{
      margin-top: 22/@rem;
      height: 480/@rem;
      .swiper-slide {
        width: 280/@rem;
        &:nth-child(1) {
          margin-left: 20/@rem;
        }
        .imgWrap {
          width: 100%;
          height: 287/@rem;
          background-color: #f4f4f4;
          img {
            width: 100%;
            height: 100%;
          }

        }
        .news {
          margin: 15/@rem;
          display: block;
          font-size: 25/@rem;
          width: 70/@rem;
          height: 40/@rem;
          background: #f48f18;
          color: #fff;
          text-align: center;
          line-height: 40/@rem;
        }
        .foods {
          font-size: 26/@rem;
          color: #333;
          margin: 15/@rem;
        }
        .info {
          font-size: 23/@rem;
          color: #7f7f7f;
          margin: 15/@rem;
        }
        .price {
          font-size: 27/@rem;
          color: red;
          margin: 15/@rem;
        }
      }
    }
    .swiper-container-Item {
      margin-top: 22/@rem;
      height: 480/@rem;
      .swiper-slide {
        width: 280/@rem;
        &:nth-child(1) {
          margin-left: 20/@rem;
        }
        .imgWrap {
          width: 100%;
          height: 287/@rem;
          background-color: #f4f4f4;
          img {
            width: 100%;
            height: 100%;
          }

        }
        .news {
          margin: 15/@rem;
          display: block;
          font-size: 25/@rem;
          width: 70/@rem;
          height: 40/@rem;
          background: #f48f18;
          color: #fff;
          text-align: center;
          line-height: 40/@rem;
        }
        .foods {
          font-size: 26/@rem;
          color: #333;
          margin: 15/@rem;
        }
        .info {
          font-size: 23/@rem;
          color: #7f7f7f;
          margin: 15/@rem;
        }
        .price {
          font-size: 27/@rem;
          color: red;
          margin: 15/@rem;
        }
      }

    }
  }
</style>
