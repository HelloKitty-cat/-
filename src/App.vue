<template>
  <div class="wrap">

        <transition name="fade">
          <keep-alive>
          <router-view />
          </keep-alive>
        </transition>

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

<style lang="less" scoped>
  .wrap{
    width: 100%;
    height: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 300ms;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
