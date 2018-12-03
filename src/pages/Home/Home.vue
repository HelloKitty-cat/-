<template>
    <div class="home">
      <HomeHeader />
      <div class="contentWrap">
        <div class="content"  ref="wrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(list,index) in focusList" :key="index">
                <img v-lazy="list.picUrl" alt="">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" ref="pagination"></div>
          </div>

          <div class="grow">
            <div class="growItem" v-for="(policy,index) in policyDescList" :key="index">
              <img v-lazy="policy.icon" alt="√">
              <span>{{policy.desc}}</span>
            </div>
          </div>

          <brandContainer />

          <HomeNewsItems />

          <div class="welfare">
            <img v-lazy="saleIndexVO.picUrl" alt="">
          </div>

          <div class="special">
            <div class="specialWrap">
              <span>专题精选</span>
              <span><i class="iconfont icon-yuanjiantou"></i></span>
            </div>
          </div>
          <div class="swiper-container-image">
            <div class="swiper-wrapper">
              <div class="swiper-slide"  v-for="(top,index) in topicList" :key="index">
                <img :src="top.itemPicUrl" alt="">
                <div class="img-middle">
                  <span class="ellipsis">{{top.title}}</span>
                  <span>{{top.priceInfo}}元起</span>
                </div>
                <p class="itemBottom ellipsis">{{top.subtitle}}</p>
              </div>
            </div>
          </div>

          <HomeItems />
        </div>
      </div>
      <div class="goTop" @click="goTop">
        <span><i class="iconfont icon-arrow-up"></i></span>
      </div>
      <div class="gift">
        <span><i class="iconfont icon-liwu"></i></span>
      </div>
      <Activity />
    </div>


</template>

<script>
  import Activity from '../../components/Activity/Activity'
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  import HomeItems from '../../components/HomeItems/HomeItems'
  import HomeNewsItems from '../../components/homeNewsItems/homeNewsItems'
  import brandContainer from '../../components/brandContainer/brandContainer'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed: {
      ...mapState(['focusList','saleIndexVO','newItemNewUserList','topicList','policyDescList'])
    },
    components:{
      HomeHeader,
      HomeItems,
      HomeNewsItems,
      brandContainer,
      Activity
    },
    mounted () {
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
      //福利
      this.$store.dispatch('reqsaleIndexVO')
      //专题下的list列表
      this.$store.dispatch('reqTopicList',() =>{
        this.$nextTick(() =>{
          new Swiper('.swiper-container-image',{
            effect : 'coverflow',
            slidesPerView: 1.5,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 30,
              stretch: 10,
              depth: 60,
              modifier: 2,
              slideShadows : true
            },
          })

        });
      });
      //banner下的list
      this.$store.dispatch('reqPolicyDescList',() =>{
        this.$nextTick(() =>{
          this.srcoll = new BScroll('.contentWrap',{
            click: true
          })
        })
      })
    },
    methods: {
      goTop () {
        this.srcoll.scrollTo(0,0,1000)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";

    .home {
      width: 100%;
      margin-bottom: 100/@rem;
      .goTop{
        width: 80/@rem;
        height: 80/@rem;
        background: #fff;
        border-radius: 50%;
        text-align: center;
        position: fixed;
        bottom: 120/@rem;
        right: 20/@rem;
        z-index: 5;
        span{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          .icon-arrow-up{
            font-size: 40/@rem;
          }
        }

      }
      .gift{
        width: 110/@rem;
        height: 80/@rem;
        background: #fff;
        position: fixed;
        bottom: 230/@rem;
        right: 0;
        border-radius: 45/@rem 0 0 45/@rem;
        border: 1px solid #ccc;
        border-right: none;
        span{
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
        .icon-liwu{
          font-size: 45/@rem;
          color: #B4282D;
        }
      }
      .contentWrap{
        width: 100%;
        height: 1334/@rem - 148/@rem;
        margin-top: 148/@rem;
        box-sizing: border-box;
        .content{
          padding-bottom: 120/@rem;
        }
      }
      .swiper-container {
        height: 400/@rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .grow {
        width: 100%;
        height: 72/@rem;
        display: flex;
        background: #fff;
        .growItem {
          width: 33.333%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 28/@rem;
            vertical-align: bottom;
          }
          span {
            font-size: 23/@rem;
            color: #333;
          }
        }

      }
      .welfare {
        width: 100%;
        height: 308/@rem;
        margin-top: 15/@rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .special {
        width: 100%;
        height: 110/@rem;
        background: #fff;
        position: relative;
        font-size: 30/@rem;
        margin-bottom: 20/@rem;
        .specialWrap {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          .icon-yuanjiantou {
            font-size: 28/@rem;
          }
        }
      }
      .swiper-container-image {
        width: 100%;
        height: 410/@rem;
        display: flex;
        margin-bottom: 20/@rem;
        background: #fff;
        .swiper-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 22/@rem;
          .swiper-slide {
            width: 575/@rem;
            height: 394/@rem;
            margin: 0 20/@rem 16/@rem 0;
            padding-top: 10/@rem;
            img {
              width: 100%;
              margin-bottom: 7/@rem;
              border-radius: 8px;
            }
            .img-middle {
              width: 100%;
              height: 28/@rem;
              font-size: 26/@rem;
              & span:nth-child(1) {
                float: left;
                font-weight: bold;
              }
              & span:nth-child(2) {
                float: right;
                color: red;
              }
            }
            .itemBottom {
              font-size: 24/@rem;
              color: #7F7F7F;
              margin-top: 7/@rem;
            }
          }
        }
      }
    }
</style>
