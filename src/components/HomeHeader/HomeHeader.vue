<template>
  <Header class="header">
   <div class="headerContent">
     <a class="headerLogo"></a>
     <div class="headerSearchContent">
       <div class="headerSearch" @click="$router.push('/search')">
         <span><i class="iconfont icon-sousuo"></i></span>
         <span>搜索商品,共9771款好物</span>
       </div>
     </div>
     <a href="javascript:;" class="headerBtn" @click="$router.push('/login')">登录</a>
   </div>
    <div class="navContent">
      <ul class="navList">
        <li v-for="(item,index) in data" :key="index" @click="handleClick(index)">
          <a href="javascript:;" :class="{on: number === index}">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </Header>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        number: 0
      }
    },
    computed: {
      ...mapState(['data'])
    },
    mounted () {
      new BScroll('.navContent',{
        click:true,
        scrollX: true
      })
    },
    methods :{
      handleClick (index) {
        this.number = index;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";
  .header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 100;
    .headerContent{
      width: 100%;
      height: 100%;
      padding: 16/@rem 30/@rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .headerLogo{
        width: 138/@rem;
        height: 40/@rem;
        display: inline-block;
        background-image: url("../../common/images/icons.png");
        background-repeat: no-repeat;
        background-position-y: -100/@rem;
        background-size: cover;
      }
      .headerSearchContent{
        margin-left: 20/@rem;
        width: 442/@rem;
        height: 56/@rem;
        line-height: 56/@rem;
        .headerSearch{
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background: #ededed;
          font-size: 27/@rem;
          color: #666;
          .icon-sousuo{
            font-size:  27/@rem;
            margin: 0 10/@rem 0 40/@rem;
          }
        }
      }
      .headerBtn{
        text-align: center;
        width: 74/@rem;
        height: 40/@rem;
        font-size: 26/@rem;
        line-height: 40/@rem;
        margin-left: 16/@rem;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: 10px;
      }
    }
   .navContent{
     overflow: hidden;
     width: 100%;
     height: 60/@rem;
     box-sizing: border-box;
     padding-bottom: 12px;
     display: flex;
     .navList{
       display: flex;
       align-items: center;
       justify-content: space-between;
       flex-flow: row nowrap;
       background: #fff;
       flex-shrink: 0;
       padding: 0 .4rem;
       li{
         display: flex;
         height: 45/@rem;
         flex-shrink: 0;
         line-height: 45/@rem;
         padding: 0 16/@rem;
         a{
           padding: 0 16/@rem;
           font-size: 26/@rem;
           color: #333;
         }
       }
       .on{
         color: #b4282d;
         padding-bottom: 12px;
         border-bottom: 3px solid #b4282d;
         pointer-events: auto;
       }
     }
   }
  }

</style>
