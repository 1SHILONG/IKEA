<template>
  <van-swipe
  class="my-swiper"
  :autoplay="3000"
  :indicator-color="white"
  >
     <van-swipe-item 
     v-for="item in props.swiperList" 
     :key="item.imgSrc"
     v-lazy="item"
     >
        <img :src="item.imgSrc" />
     </van-swipe-item>
  </van-swipe>
</template>

<script setup>
const props = defineProps(['swiperList'])
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin';
.my-swiper
  width 100vw
  img
   wh(100%, 300px)
   object-fit cover
</style>