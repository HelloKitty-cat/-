<template>
  <div class="topicWrap">
    <header class="topicHeader">
      <div class="topicContent">
        <span @click="$router.replace('/home')"><i class="iconfont icon-shouye"></i></span>
        <span class="title"></span>
        <span @click="$router.replace('/search')"><i class="iconfont icon-sousuo"></i></span>
        <span @click="$router.replace('/cart')"><i class="iconfont icon-gouwuche"></i></span>
      </div>
    </header>
    <div class="MoveContent">
      <div class="content">
        <div class="topic">
          <div class="swiper-container-banner">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                <img v-lazy="item.picUrl" alt="">
                <div class="mask">
                  <div class="maskTop">
                    <span class="maskLines"></span>
                    <span>{{item.subTitle}}</span>
                    <span class="maskLines"></span>
                  </div>
                  <span class="maskMiddle">{{item.title}}</span>
                  <span class="maskBottom">{{item.desc}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="topicList">
          <div class="swiper-container-list">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(list,index) in column" :key="index">
                <img v-lazy="list.picUrl" alt="">
                <div class="tNum">{{list.articleCount}}</div>
                <p>{{list.title}}</p>
              </div>
            </div>
          </div>
        </div>
        <TopicRecommend />
        <TenClock />
        <TopicYanxuan />
        <TopicLook />
        <TopicMore />
      </div>
    </div>
    <div class="goTop" @click="goTop">
      <span><i class="iconfont icon-arrow-up"></i></span>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import TopicRecommend from '../../components/TopicRecommend/TopicRecommend'
  import TenClock from '../../components/TenClock/TenClock'
  import TopicYanxuan from '../../components/TopicYanxuan/TopicYanxuan'
  import TopicLook from '../../components/TopicLook/TopicLook'
  import TopicMore from '../../components/TopicMore/TopicMore'
  export default {
    computed: {
      ...mapState(['banner','column'])
    },
    mounted () {
      this.$store.dispatch('reqTopicBanner',() =>{
        this.$nextTick(() =>{
          new Swiper('.swiper-container-banner', {
            slidesPerView: 1.15,
            centeredSlides: true,
            loop: true,
            spaceBetween: 20,
          })
        })
      });

      this.$store.dispatch('reqColumn',() =>{
        this.$nextTick(() =>{
          new Swiper('.swiper-container-list',{
            slidesPerView : 3.8,
            spaceBetween : 20,
          })
          this.scroll = new BScroll('.MoveContent',{
            click: true
          })
        })
      })


    },
    components: {
      TopicRecommend,
      TenClock,
      TopicYanxuan,
      TopicLook,
      TopicMore
    },
    methods: {
      goTop () {
        this.scroll.scrollTo(0,0,1000)
      }
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
          width: 2.29333rem;
          height: 0.72rem;
          background: url("../../common/images/icons.png");
          background-repeat: no-repeat;
          background-position: 0 -1.70667rem;
          background-size: 2.29333rem 5.30667rem;
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
      width: 100%;
      height: 1334/@rem - 88/@rem - 100/@rem;
      .content{
        padding-bottom: 100/@rem;
        width: 100%;
      }
      .topic{
        width: 100%;
        height: 385/@rem;
        background: #fff;
        padding: 100/@rem 0 20/@rem 0;
        .swiper-container-banner{
          width: 100%;
          height: 100%;
          background: #fff;
            .swiper-slide{
              box-sizing: border-box;
              text-align: center;
              position: relative;
              img{
                width: 100%;
                height: 100%;
                border-radius: 8px;
              }
              .mask{
                width: 466/@rem;
                height: 198/@rem;
                background: rgba(255,255,255,0.9);
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -233/@rem;
                margin-top: -99/@rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .maskTop {
                  width: 100%;
                  font-size: 20/@rem;
                  color: #7f7f7f;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  .maskLines{
                    display: block;
                    width: 24/@rem;
                    height: 1/@rem;
                    background: #7f7f7f;
                    margin: 8/@rem;
                  }
                }
                .maskMiddle{
                  font-size: 32/@rem;
                  color: #333;
                  font-weight: bold;
                  margin-top: 16/@rem;
                  margin-bottom: 16/@rem;
                }
                .maskBottom{
                  font-size: 24/@rem;
                  color: #333;
                }
              }
            }
          }
      }
      .topicList{
        background: #fff;
        height: 220/@rem;
        padding: 32/@rem 0 20/@rem 30/@rem;
        .swiper-container-list{
          height: 100%;
          .swiper-slide{
            position: relative;
            img{
              width: 164/@rem;
              height: 164/@rem;
              vertical-align: middle;
            }
            .tNum{
              font-size: 24/@rem;
              color: #fff;
              position: absolute;
              top: 0;
              right: 18/@rem;
            }
            p{
              font-size: 24/@rem;
              color: #333;
              text-align: center;
              margin-top: 10/@rem;
            }
          }

        }
      }
    }
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
  }
</style>
