<template>
  <div>
    <div class="itemWrap" v-for="(list,index) in cateList" :key="index">
      <div class="categoryModule">
        <img v-lazy="list.bannerUrl" alt="">
      </div>
      <div class="swiper-container-food">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in list.itemList" :key="index">
            <div class="imgWrap">
              <img v-lazy="item.listPicUrl" alt="">
            </div>
            <p class="info ellipsis">{{item.name}}</p>
            <p class="price">￥{{item.retailPrice}}</p>
            <span class="more" v-show="item.isCouponConflict">爆品</span>
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
    computed:{
      ...mapState(['cateList'])
    },
    mounted () {
      //nav总数据
      this.$store.dispatch('reqCateList',() =>{
        this.$nextTick(() =>{
         setTimeout(() =>{
           new Swiper('.swiper-container-food',{
             slidesPerView : 3.2,
             spaceBetween : 20,
           },200)  //延迟加载
         })
        })
      });


    }
  }
</script>

<style lang="less" scoped>

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
        height: 100%;
      }
    }
    .swiper-container-food{
      margin-top: 22/@rem;
      height: 370/@rem;
      display: flex;
      flex-flow: row nowrap;
      .swiper-wrapper{
        display: flex;
        flex-shrink: 0;
        flex-flow: row nowrap;
        .swiper-slide{
          flex-shrink: 0;
          position: relative;
          width: 200/@rem;
          margin-right: 20/@rem;
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
  }


</style>
