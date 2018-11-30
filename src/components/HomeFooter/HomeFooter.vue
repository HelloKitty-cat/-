<template>
 <Footer class="footer">
   <nav class="footer-nav">
     <router-link to="/home" :class="{active: $route.path === '/home'}">
       <span><i class="iconfont icon-shouye"></i></span>
       <span>首页</span>
     </router-link>
     <router-link to="/item" :class="{active: $route.path === '/item'}">
       <span><i class="iconfont icon-category"></i></span>
       <span>分类</span>
     </router-link>
     <router-link to="/topic" :class="{active: $route.path === '/topic'}">
       <span><i class="iconfont icon-cubelifangti"></i></span>
       <span>识物</span>
     </router-link>
     <router-link to="/cart" :class="{active: $route.path === '/cart'}">
       <span><i class="iconfont icon-gouwuche"></i></span>
       <span>购物车</span>
     </router-link>
     <router-link to="/login" :class="{active: $route.path === '/login'}">
       <span><i class="iconfont icon-geren"></i></span>
       <span>个人</span>
     </router-link>
   </nav>
 </Footer>
</template>

<script>
  export default {}
</script>

<style lang="less" >
  @import "../../common/stylus/mixins";
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    width: 100%;
    height: 100/@rem;
    z-index: 100;
    .footer-nav{
      width: 100%;
      height: 100%;
      display: flex;
      a{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
        .iconfont{
          font-size: 40/@rem;
        }
        span{
          margin-top: 8/@rem;
          font-size: 23/@rem;
        }
        &.active{
          color: #B4282D !important;
        }
      }

    }
  }

</style>
