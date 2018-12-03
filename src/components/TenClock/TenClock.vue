<template>
  <div class="TenWrap">
    <div class="title">十点一刻</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in tenfifteen" :key="index">
          <div class="top">
            <span class="lines"></span>
            <span>今日话题</span>
            <span class="lines"></span>
          </div>
          <p class="middle-q">{{item.title}}</p>
          <p class="middle-a">{{item.desc}}</p>
          <p class="bottom">{{item.id}}人参与话题</p>
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
      ...mapState(['tenfifteen'])
    },
    mounted () {
      this.$store.dispatch('reqTenfifteen', ()=>{
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            slidesPerView : 1.1,
            spaceBetween : 20,
          })
        })
      })
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";

  .TenWrap{
    width: 100%;
    height: 552/@rem;
    box-sizing: border-box;
    padding: 0 0 20/@rem 20/@rem;
    margin-top: 20/@rem;
    background: white;
    .title{
      width: 100%;
      height: 120/@rem;
      text-align: center;
      font-size: 28/@rem;
      line-height: 120/@rem;
    }
    .swiper-container{
      height: 412/@rem;
      width: 100%;
      .swiper-slide{
        margin-right: 20/@rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAGbBAMAAADXTpIOAAAAHlBMVEUAAADn5+fr6+vn5+fo6Ojr6+vm5ubo6Ojy8vL6+vrAm3THAAAABnRSTlMAQEvA0ONT1GB5AAACbUlEQVR42u3T0QlCQRRDwW3JFuzAJrYVa7Bbf0UeROFdxDCngcBA1lZoIUCECBEiRIgQCdE3RA8dhggRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChAgRIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIECFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECFChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIkSIECFChAgRIkSIECFChAgRIkRChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFChAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIfkd0Tkcj9/33DRMVCA0TNQjNElUIjRJ1CE0SlQgNErUIzRHVCI0R9QhNERUJ7XVOb0QvQpelAyJCiYhQIiKUiAglIkKJiFAiIpSICCUiQomIUCQi9DkRoUREKBERSkSEEhGhREQoERFKRIQSEaFERCgREUpEhBLRDUIgujIINb/sCeTQbvXhK7c0AAAAAElFTkSuQmCC);
        background-repeat: no-repeat;
        box-sizing: border-box;
        padding: 38/@rem 90/@rem 80/@rem 40/@rem;
        .top{
          margin-top: 20/@rem;
          font-size: 24/@rem;
          color: #7f7f7f;
          display: flex;
          align-items: center;
          justify-content: center;
          .lines{
            display: inline-block;
            width: 24/@rem;
            height: 1px;
            background: #ccc;
            margin: 5px;
          }
        }
        .middle-q{
          font-size: 36/@rem;
          font-weight: bold;
          margin: 60/@rem 0 14/@rem 0;
          text-align: center;
        }
        .middle-a{
          font-size: 28/@rem;
          text-align: center;
          margin: 20/@rem 0 14/@rem 0;
        }
        .bottom{
          font-size: 24/@rem;
          margin-top: 70/@rem;
          text-align: center;
        }
      }
    }
  }
</style>
