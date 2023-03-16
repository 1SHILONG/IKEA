<template>
  <div class="d-action-bar">
    <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <van-action-bar-icon icon="cart-o" text="购物车" badge="9" @click="onClickIcon" />
    <van-action-bar-icon icon="shop-o" text="店铺" badge="6" @click="onClickIcon" />
    <div class="button">
    <van-button class="l-button" plain round type="primary" text="加入购物车" />
    <van-button class="r-button" round color="#23579c" type="primary" text="立即购买" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.container
  wh(100vw, 1.6rem)
.d-action-bar
  position fixed
  bottom 0
  left 0
  background-color white
  padding 0 .266667rem
  display flex
  z-index 1000
  wh(calc(100vw - .533333rem), 1.6rem)
  .icon
    flex 1
  .button
    width 6.4rem
    margin auto 0
    .l-button
      width 2.72rem 
      margin-right .16rem
    .r-button
      width 2.72rem 
</style>