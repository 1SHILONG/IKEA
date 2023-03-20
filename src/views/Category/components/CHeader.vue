<template>
  <div class="container van-hairline--bottom">
    <div class="c-search">
      <van-swipe class="c-swipe" vertical :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="hotword in hotWords" :key="index" class="c-swipe-item">{{ hotword }}</van-swipe-item>
      </van-swipe>
    </div>
    <div style="height: 24px;display: inline-block;line-height: 50px; margin-left: 14px;">
      <van-icon class="scan" name="scan" size="24px" />
    </div>
  </div>
  <div style="width: 100vw;height: 50px;"></div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore()
const hotWords = computed(() => store.state.category.hotWords)
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.container
  position fixed
  top 0
  left 0
  display flex
  height 1.12rem 
  padding .106667rem .266667rem
  background-color #fff
  z-index 999
.c-search
  background-color #eff2f5
  wh(8rem, .8rem)
  border-radius .4rem
  margin .16rem 0
  position relative
  .c-swipe
    height .8rem 
    position absolute
    top 0
    left .8rem 
    .c-swipe-item
      font-size .373333rem
      line-height .8rem
  &.scan
    padding .266667rem 
</style>