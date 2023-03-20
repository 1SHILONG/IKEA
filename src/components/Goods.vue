<template>
  <div class="container">
    <h1 class="title">{{state.text}}</h1>
    <main class="goods">
      <van-skeleton title :row="3"  :loading="state.loading">
      <div class="col">
        <GoodsItem v-for="goods in state.leftGoods" :key="goods.id" :goods="goods" />
      </div>
      <div class="col">
        <GoodsItem v-for="goods in state.rightGoods" :key="goods.id" :goods="goods" />
      </div>
    </van-skeleton>
    </main>
  </div>
  <div class="text">到底了...</div> 
</template>

<script setup>
import GoodsItem from './GoodsItem.vue';
const state = defineProps({
  leftGoods: {
    type: Array,
    default: []
  },
  rightGoods: {
    type: Array,
    default: []
  },
  loading: {
    type: Boolean,
    default: true
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin';
.container
  width 100%
  background-color rgb(247, 248, 250)
  .title
    font-size .48rem 
    text-align center
    padding .266667rem 0
    color black
  .goods
    fj()
    padding 0 .266667rem
    flex 1
    .col
      wh(48%, 100%)
.text 
  text-align center
  font-size .48rem 
  padding-bottom .16rem
  wh(100%, .533333rem)  
</style>
