<template>
  <van-swipe
   class="my-swiper"
   :autoplay="3000"
   :indicator-color="white"
  >
     <van-swipe-item 
      v-for="item in swiperList" 
      :key="item.imgSrc || item"
      v-lazy="item"
     >
         <!-- 通用组件 兼容数据格式不同 -->
        <img :src="item.imgSrc || item" />
     </van-swipe-item>
  </van-swipe>
</template>

<script setup>
defineProps(['swiperList'])
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin';
.my-swiper
  width 100vw
  img
   wh(100%, 300px)
   object-fit cover
</style>