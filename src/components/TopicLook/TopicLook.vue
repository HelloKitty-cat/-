<template>
  <div class="look">
    <h3 class="title">严选LOOK</h3>
    <img v-lazy="yxLook.picUrl" alt="">
    <div class="personInfo">
      <img v-lazy="yxLook.avatar" alt="">
      <span class="username">{{yxLook.nickname}}</span>
    </div>
    <div class="content">
      {{yxLook.content}}
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['yxLook'])
    },
    mounted () {
      this.$store.dispatch('reqYxLook')
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";

  .look{
    margin-top: 20/@rem;
    width: 100%;
    height: 1124/@rem;
    background: #fff;
    .title{
      width: 100%;
      height: 120/@rem;
      font-size: 28/@rem;
      color: #333;
      text-align: center;
      line-height: 120/@rem;
    }
    img{
      width: 100%;
      vertical-align: middle;
    }
    .personInfo{
      padding: 20/@rem 0 20/@rem 20/@rem;
      width: 100%;
      height: 88/@rem;
      box-sizing: border-box;
      position: relative;
      img{
        height: 46/@rem;
        width: 46/@rem;
        border-radius: 50%;
        vertical-align: top;
        margin-right: 20/@rem;
      }
      .username{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 28/@rem;
        letter-spacing: 4px;
      }
    }
    .content{
      width: 100%;
      height: 162/@rem;
      box-sizing: border-box;
      padding: 10/@rem 30/@rem 20/@rem 30/@rem;
      font-size: 28/@rem;
      color: #7f7f7f;
      line-height: 1.6;
      text-indent: 1em;
      overflow: hidden;
    }
  }
</style>
