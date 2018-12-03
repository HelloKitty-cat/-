<template>
  <div class="recommend">
    <h3 class="title">{{zhenOne.typeName}}</h3>
    <div class="itemMajor">
      <img v-lazy="zhenOne.picUrl" alt="">
      <div class="info">
        <div class="infoTop">
          <span class="left">{{zhenOne.title}}</span>
          <span class="right">{{zhenOne.priceInfo}}元起</span>
        </div>
        <p class="ellipsis">{{zhenOne.subTitle}}</p>
      </div>

      <div class="items" v-for="(item,index) in zhenItems" :key="index">
        <div class="itemLeft">
          <p class="ellipsis">{{item.title}}</p>
          <p class="ellipsis">{{item.subTitle}}</p>
        </div>
        <div class="itemRight">
          <img v-lazy="item.picUrl" alt="">
          <span>{{item.typeName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['zhenOne','zhenItems'])
    },
    mounted () {
      this.$store.dispatch('reqZhenOne')
      this.$store.dispatch('reqZhenItems')
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";
  .recommend{
    width: 100%;
    height: 1357/@rem;
    background: #fff;
    box-sizing: border-box;
    padding: 0 30/@rem;
    margin-top: 20/@rem;
    h3{
      width: 100%;
      height: 120/@rem;
      text-align: center;
      line-height: 120/@rem;
      color: #333;
      background: #fff;
      font-size: 28/@rem;
    }
    .itemMajor{
      width: 100%;
      height: 589/@rem;
      img{
        width: 100%;
        vertical-align: middle;
      }
      .info{
        width: 100%;
        height: 197/@rem;
        box-sizing: border-box;
        padding: 24/@rem 20/@rem 67/@rem 20/@rem;
        border: 1px solid #ccc;
        .infoTop{
          font-size: 34/@rem;
          color: #333;
          display: flex;
          justify-content: space-between;
        }
        p{
          font-size: 28/@rem;
          color: #7f7f7f;
          margin-top: 35/@rem;
        }
      }
      .items{
        width: 100%;
        height: 274/@rem;;
        border: 1px solid #ccc;
        margin-top: 30/@rem;
        .itemLeft{
          width: 408/@rem;
          height: 100%;
          box-sizing: border-box;
          padding: 0 30/@rem 0 20/@rem;
          float: left;
          p{
            margin-top: 100/@rem;
            font-size: 32/@rem;
            &:nth-child(2){
              margin-top: 20/@rem;
              font-size: 24/@rem;
              color: #7f7f7f;
            }
          }
        }
        .itemRight{
          float: right;
          width: 280/@rem;
          height: 100%;
          position: relative;
          img{
            height: 100%;
            width: 100%;
            vertical-align: middle;
          }
          span{
            display: inline-block;
            border: 1px solid #d9d9d9;
            background: rgba(255,255,255,0.9);
            font-size: 24/@rem;
            border-radius: 20px;
            padding: 4px 8px;
            position: absolute;
            top: 8px;
            left: 8px;
          }
        }
      }
    }
  }

</style>
