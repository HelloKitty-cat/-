<template>
  <div>
    <div class="Search">
      <header class="header">
        <input type="search" placeholder="严选双12 热销TOP100">
        <span><i class="iconfont icon-sousuo"></i></span>
        <span @click="$router.back()" class="cancel">取消</span>
      </header>
    </div>
    <div class="m-searchSuggestionsViews">
      <div class="m-searchSuggestions">
        <h3>热门搜索</h3>
        <div class="navs">
          <a href="javascript:;">按摩仪</a>
          <a href="javascript:;" class="active">电器低至5折</a>
          <a href="javascript:;" class="active">全场8折满减券</a>
          <a href="javascript:;">秋冬围巾</a>
          <a href="javascript:;">羽绒服6折起</a>
          <a href="javascript:;">每满200减100</a>
          <a href="javascript:;">明星商品低至6折</a>
          <a href="javascript:;" class="active">特价1折起</a>
          <a href="javascript:;">女鞋</a>
          <a href="javascript:;">厨电锅具89元起</a><br/>
          <a href="javascript:;" class="active">海外制造甄选</a>
          <a href="javascript:;">美妆个护7折起</a>
          <a href="javascript:;" class="active">行李箱</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @import "../../common/stylus/mixins";

  .Search{
    width: 100%;
    .header{
      width: 100%;
      height: 88/@rem;
      background: #fff;
      padding: 0 20/@rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 5;
      &>input[type='search']{
        padding-left: 50/@rem;
        box-sizing: border-box;
        width: 90%;
        height: 56/@rem;
        font-size: 24/@rem;
        outline: none;
        background: #F4F4F4;
        color: rgba(0,0,0,.8);
        border: none;
      }
      .icon-sousuo{
        font-size: 27/@rem;
        color: #ccc;
        position: absolute;
        top: 30/@rem;
        left: 30/@rem;
      }
      .cancel{
        width: 10%;
        font-size: 30/@rem;
        margin-left: 40/@rem;
        padding: 8px;
      }
    }
  }
  .m-searchSuggestionsViews{
    margin-top: 88/@rem;
    width: 100%;
    height: 404/@rem;
    background: #fff;
    .m-searchSuggestions{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 30/@rem;
      h3{
        width: 100%;
        height: 90/@rem;
        font-size: 27/@rem;
        color: #999;
        line-height: 90/@rem;
      }
      .navs{
        width: 100%;
        height: 316/@rem;
        a{
          display: inline-block;
          vertical-align: middle;
          font-size: 24/@rem;
          padding: 15/@rem;
          border: 1px solid #999;
          border-radius: 7px;
        }
        .active{
          color: #b4282d;
          border: 1px solid #b4282d;
        }
      }
    }

  }
</style>
