<template>
  <h1>{{ title }}</h1>
  <div class="container">
    <van-grid :column-num="2" :border="false">
      <van-grid-item v-for="item in items" :key="index">
        <van-image lazy-load :src="item.imgSrc" />
        <text>{{ item.text }}</text>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: []
  }
})
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.container
  width 6.266667rem /* 235/37.5 */
  padding .266667rem .533333rem /* 20/37.5 */
h1 
  font-size 16px
  text-align center
</style>