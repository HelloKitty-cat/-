<template>
  <div class="item">
    <div class="headerWrap">
      <div class="header">
        <div class="headerSearch" @click="$router.push('/search')">
          <span><i class="iconfont icon-sousuo"></i></span>
          <span>搜索商品, 共9723款好物</span>
        </div>
      </div>
    </div>
    <div class="itemWrap">
      <div class="left">
        <ul class="leftUl">
          <li v-for="(list,index) in categoryL1List" :key="index" @click="showList(index)">
            <a href="javascript:;" :class="{active: index === checkNum}">{{list.name}}</a>
          </li>
        </ul>
      </div>

      <div class="right">
        <div class="rightWrap">
          <img v-if="categoryL1List[checkNum]" v-lazy="categoryL1List[checkNum].wapBannerUrl" :key="categoryL1List[checkNum].wapBannerUrl"  alt="">
          <div class="title">
            <span class="lines"></span>
            <span v-if="categoryL1List[checkNum]">{{categoryL1List[checkNum].name}}</span>
            <span>分类</span>
            <span class="lines"></span>
          </div>

          <ul class="contentWrap" v-if="categoryL1List[checkNum]">
            <li v-for="(item,index) in categoryL1List[checkNum].subCateList" :key="index">
              <a href="javascript:;">
                <img v-lazy="item.wapBannerUrl" :key="item.wapBannerUrl" alt="">
                <span class="ellipsis">{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="splitLine"></div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        checkNum: 0
      }
    },
    computed: {
      ...mapState(['categoryL1List'])
    },
    mounted () {

      this.$store.dispatch('reqCategoryL1List', () =>{
        this.$nextTick(() =>{
          new BScroll('.left',{
            click: true
          })
          new BScroll('.right',{
            click: true,
          })
        })
      });
    },
    methods: {
      showList (index) {
        this.checkNum = index
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";
  .item{
    width: 100%;
    height: 100%;
    background: #fff;
    .headerWrap{
      position: fixed;
      top:0;
      left: 0;
      z-index: 100;
      width: 100%;
      background: white;
      height: 88/@rem;
      border-bottom: 2px solid #ccc;
      .header{
        width: 100%;
        height: 88/@rem;
        padding:0 30/@rem 0 30/@rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .headerSearch{
          width: 100%;
          height: 55/@rem;
          background: #ededed;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          span{
            font-size: 26/@rem;
            color: #666;
          }
          .icon-sousuo{
            font-size: 28/@rem;
            margin-right: 8/@rem;
          }
        }
      }
    }
    .itemWrap{
      width: 100%;
      overflow: hidden;
      padding-top: 88/@rem;
      .left{
        width: 160/@rem;
        height: 1334/@rem - 88/@rem - 100/@rem;
        float: left;
        margin-top: 40/@rem;
        .leftUl{
          padding-bottom: 1rem;
          width: 160/@rem;
          background: #fff;
          li{
            width: 100%;
            height: 75/@rem;
            text-align: center;
            line-height: 75/@rem;
            margin-bottom: 20/@rem;
            cursor: pointer;
            a{
              font-size: 27/@rem;
              color: #333;
              display: block;
              width: 100%;
              height: 100%;
            }
            .active{
              color: red;
              font-size: 33/@rem;
              font-weight: bold;
              border-left: 6px solid red;
            }
          }
        }
      }
      .right{
        width: 587/@rem;
        margin-left: 160/@rem;
        height: 1334/@rem - 88/@rem - 100/@rem;
        .rightWrap{
          box-sizing: border-box;
          padding: 30/@rem;
          img{
            width: 100%;
          }
          .title{
            height: 107/@rem;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
              font-size: 28/@rem;
              color: #7e8c8d;
            }
            .lines{
              width: 40/@rem;
              height: 1/@rem;
              background: #d9d9d9;
              margin: 8/@rem;
            }
          }
          .contentWrap{
            overflow: hidden;
            li{
              width: 140/@rem;
              height: 215/@rem;
              margin-right: 33/@rem;
              float: left;
              &:nth-child(3n){
                margin-right: 0;
              }
              a{
                display: flex;
                width: 100%;
                height: 100%;
                flex-direction: column;
                font-size: 23/@rem;
                span{
                  display: block;
                  color: #333;
                  height: 71/@rem;
                  text-align: center;
                  line-height: 71/@rem;
                }
              }
            }
          }
        }
      }
      .splitLine{
        width: 2px;
        height: 1334/@rem - 88/@rem - 100/@rem;
        background: #ccc;
        position: absolute;
        top: 88/@rem;
        left: 160/@rem;
      }
    }
  }

</style>
