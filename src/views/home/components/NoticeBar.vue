<template>
<van-notice-bar left-icon="volume-o" :scrollable="false">
  <van-swipe
    vertical
    class="notice-swipe"
    :autoplay="3000"
    :touchable="false"
    :show-indicators="false"
  >
    <van-swipe-item>召回信息: 宜家宣布召回部分莱唐镜子。</van-swipe-item>
    <van-swipe-item>召回信息: 宜家宣布召回部分遮光卷帘。</van-swipe-item>
    <van-swipe-item>召回信息: 宜家宣布召回部分坤坤玩偶。</van-swipe-item>
  </van-swipe>
</van-notice-bar>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
.notice-swipe 
  height 40px
  line-height 40px
.van-notice-bar
  color rgb(135, 135, 135)
  background rgb(245, 245, 245)
</style>