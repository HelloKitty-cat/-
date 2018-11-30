<template>
  <div class="wrap">
    <router-view />
    <HomeFooter />
  </div>
</template>

<script>
  import HomeFooter from './components/HomeFooter/HomeFooter'
  export default {
    components: {
      HomeFooter,
    }
  }
</script>

<style lang="less">
  .wrap{
    width: 100%;
    height: 100%;

  }

</style>
