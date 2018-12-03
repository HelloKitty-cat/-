<template>
  <div class="more">
    <div class="title">
      <span class="lines"></span>
      <span>更多精彩</span>
      <span class="lines"></span>
    </div>
    <div class="items" v-for="(arr,index) in newArray" :key="index">
      <img v-lazy="arr.itemPicUrl" alt="">
      <p>{{arr.title}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['findMore']),
      newArray () {
        const {findMore} = this;
        return findMore.slice(1,7)
      }
    },
    mounted () {
      this.$store.dispatch('reqFindMore')
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";

  .more{
    margin-top: 20/@rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30/@rem;
    .title{
      width: 100%;
      height: 140/@rem;
      font-size: 28/@rem;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      .lines{
        display: block;
        width: 264/@rem;
        height: 1px;
        background: #d9d9d9;
        margin: 8px;
      }
    }
    .items{
      width: 100%;
      height: 501/@rem;
      background: #fff;
      box-sizing: border-box;
      padding: 24/@rem;
      margin-bottom: 20/@rem;
      img{
        width: 100%;
      }
      p{
        font-size: 28/@rem;
        margin-top: 28/@rem;
      }
    }
  }
</style>
