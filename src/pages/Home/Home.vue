<template>
  <div class="home">
    <HomeHeader />
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(list,index) in focusList" :key="index">
            <img :src="list.picUrl" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>

    <div class="grow">
      <div class="growItem">
        <img src="../../common/images/hook.png" alt="√">
        <span>网易自营品牌</span>
      </div>
      <div class="growItem">
        <img src="../../common/images/hook.png" alt="√">
        <span>30天无忧退货</span>
      </div>
      <div class="growItem">
        <img src="../../common/images/hook.png" alt="√">
        <span>48小时快速退款</span>
      </div>
    </div>

    <div class="brandContainer">
      <div class="brandHeader">
        <span>品牌制造商直供</span>
        <span><i class="iconfont icon-yuanjiantou"></i></span>
      </div>

      <div class="brandItemContainer">
        <a href="javascript:;">
          <p>CK制造商</p>
          <p>25元起</p>
        </a>
        <a href="javascript:;">
          <p>Nine West制造商</p>
          <p>199元起</p>
        </a>
        <a href="javascript:;">
          <p>新秀丽制造商</p>
          <p>49元起</p>
        </a>
        <a href="javascript:;">
          <p>Birkenstock集团制造商</p>
          <p>89.9元起</p>
        </a>
      </div>
    </div>

    <div class="newItems">
      <div class="newItemsWrap">
        <span>新品首发</span>
        <div class="findAll">查看全部 ></div>
      </div>

      <div class="swiper-container-Item">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="imgWrap">
              <img src="../../common/images/loading.gif" alt="">
            </div>
            <span class="news">新品</span>
            <p class="ellipsis foods">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
            <p class="info">夏季爆品，媲美现煮</p>
            <p class="price">￥98</p>
          </div>
          <div class="swiper-slide">
            <div class="imgWrap">
              <img src="../../common/images/loading.gif" alt="">
            </div>
            <span class="news">新品</span>
            <p class="ellipsis foods">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
            <p class="info">夏季爆品，媲美现煮</p>
            <p class="price">￥98</p>
          </div>
          <div class="swiper-slide">
            <div class="imgWrap">
              <img src="../../common/images/loading.gif" alt="">
            </div>
            <span class="news">新品</span>
            <p class="ellipsis foods">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
            <p class="info">夏季爆品，媲美现煮</p>
            <p class="price">￥98</p>
          </div>
          <div class="swiper-slide">
            <div class="imgWrap">
              <img src="../../common/images/loading.gif" alt="">
            </div>
            <span class="news">新品</span>
            <p class="ellipsis foods">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
            <p class="info">夏季爆品，媲美现煮</p>
            <p class="price">￥98</p>
          </div>
          <div class="swiper-slide">
            <div class="imgWrap">
              <img src="../../common/images/loading.gif" alt="">
            </div>
            <span class="news">新品</span>
            <p class="ellipsis foods">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
            <p class="info">夏季爆品，媲美现煮</p>
            <p class="price">￥98</p>
          </div>
          <div class="swiper-slide">
            <div class="imgWrap">
              <img src="../../common/images/loading.gif" alt="">
            </div>
            <span class="news">新品</span>
            <p class="ellipsis foods">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
            <p class="info">夏季爆品，媲美现煮</p>
            <p class="price">￥98</p>
          </div>

        </div>
      </div>

    </div>

    <div class="welfare">
      <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
    </div>

    <div class="special">
      <div class="specialWrap">
        <span>专题精选</span>
        <span><i class="iconfont icon-yuanjiantou"></i></span>
      </div>
    </div>

    <div class="imgWrap">
      <div class="img-scroll">
        <div class="imgItem">
          <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt="">
          <div class="img-middle">
            <span class="ellipsis">给毛孔来一次深度清洁</span>
            <span>107.1元起</span>
          </div>
          <p class="itemBottom ellipsis">硅胶洁面仪，洗出会发光的素颜肌</p>
        </div>
        <div class="imgItem">
          <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt="">
          <div class="img-middle">
            <span class="ellipsis">给毛孔来一次深度清洁</span>
            <span>107.1元起</span>
          </div>
          <p class="itemBottom ellipsis">硅胶洁面仪，洗出会发光的素颜肌</p>
        </div>
        <div class="imgItem">
          <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt="">
          <div class="img-middle">
            <span class="ellipsis">给毛孔来一次深度清洁</span>
            <span>107.1元起</span>
          </div>
          <p class="itemBottom ellipsis">硅胶洁面仪，洗出会发光的素颜肌</p>
        </div>
      </div>
    </div>

    <HomeItems />
  </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  import HomeItems from '../../components/HomeItems/HomeItems'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed: {
      ...mapState(['focusList'])
    },
    components:{
      HomeHeader,
      HomeItems
    },
    mounted () {
      new Swiper('.swiper-container-Item',{
        slidesPerView : 2.5,
        spaceBetween : 20,
      })

      //nav导航
      this.$store.dispatch('reqData');
      //banner数据
      this.$store.dispatch('reqBanner',() =>{
        this.$nextTick(() =>{
          new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      });
    }
  }
</script>

<style lang="less">
  @import "../../common/stylus/mixins";
  .home{
    width: 100%;
    margin-bottom: 100/@rem;
    .swiper-container {
      margin-top: 148/@rem;
      background: pink;
      height: 400/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .grow{
      width: 100%;
      height: 72/@rem;
      display: flex;
      background: #fff;
      .growItem{
        width: 33.333%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 28/@rem ;
          vertical-align: bottom;
        }
        span{
          font-size: 23/@rem;
          color: #333;
        }
      }

    }
    .brandContainer{
      margin-top: 12/@rem;
      width: 100%;
      height: 690/@rem;
      margin-bottom: 20/@rem;
      .brandHeader{
        width: 100%;
        height: 110/@rem;
        background: #fff;
        text-align: center;
        span{
          font-size: 33/@rem;
        }
        .icon-yuanjiantou{
          font-size: 30/@rem;
        }
      }
      .brandItemContainer{
        padding: 0 8/@rem;
        box-sizing: border-box;
        width: 100%;
        height: 580/@rem;
        background: #fff;
        a{
          box-sizing: border-box;
          padding: 18/@rem;
          width: 48%;
          display: inline-block;
          height: 48%;
          border: 1px solid #ccc;
          p{
            font-size: 25/@rem;
            margin-top: 8/@rem;
            color: #333;
          }
          &:nth-child(1),&:nth-child(2){
            margin-bottom: 8/@rem;
          }
          &:nth-child(1),&:nth-child(3){
            margin-left: 2/@rem;
          }
        }
      }
    }
    .newItems{
      width: 100%;
      height: 785/@rem;
      background: #fff;
      .newItemsWrap{
        width: 100%;
        height: 260/@rem;
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        span{
          font-size: 36/@rem;
          color: #8BA0B6;
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
        }
        .findAll{
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
      .swiper-container-Item{
        margin-top: 22/@rem;
        height: 480/@rem;
        .swiper-slide{
          width: 280/@rem;
          background: pink;
          &:nth-child(1){
            margin-left: 20/@rem;
          }
          .imgWrap{
            width: 100%;
            height: 287/@rem;
            background-color: #f4f4f4;
            img{
              width: 100%;
              height: 100%;
            }

          }
          .news{
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
          .foods{
            font-size: 26/@rem;
            color: #333;
            margin: 15/@rem;
          }
          .info{
            font-size: 23/@rem;
            color:#7f7f7f ;
            margin: 15/@rem;
          }
          .price{
            font-size: 27/@rem;
            color: red;
            margin: 15/@rem;
          }
        }

      }
    }
    .welfare{
      width: 100%;
      height: 308/@rem;
      margin-top: 15/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .special{
      width: 100%;
      height: 110/@rem;
      background: #fff;
      position: relative;
      font-size: 30/@rem;
      margin-bottom: 20/@rem;
      .specialWrap{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        .icon-yuanjiantou{
          font-size: 28/@rem;
        }
      }
    }
    .imgWrap{
      width: 100%;
      height: 410/@rem;
      display: flex;
      margin-bottom: 20/@rem;
      background: #fff;
      .img-scroll{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 22/@rem;
        .imgItem{
          width: 575/@rem;
          height: 394/@rem;
          margin: 0 20/@rem 16/@rem 0;
          padding-top: 10/@rem;
          img{
            width: 100%;
            margin-bottom: 7/@rem;
            border-radius: 8px;
          }
          .img-middle{
            width: 100%;
            height: 28/@rem;
            font-size: 26/@rem;
            & span:nth-child(1){
              float: left;
              font-weight: bold;
            }
            & span:nth-child(2){
              float: right;
              color: red;
            }
          }
          .itemBottom{
            font-size: 24/@rem;
            color: #7F7F7F;
            margin-top: 7/@rem;
          }
        }
      }
    }
  }
</style>
