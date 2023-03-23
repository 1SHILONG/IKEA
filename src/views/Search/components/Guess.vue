<template>
  <div>
    <text class="title">猜你想搜</text>
    <div class="container">
      <div class="item" v-for="(item, index) in items" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ["书桌", "床", "手推车", "桌子", "毕利", "鞋柜", "沙发", "椅子"]
</script>

<style lang="stylus" scoped>
.title
  line-height 3
  margin .533333rem
  font-size .426667rem
  font-weight bold
  color black
.container
  width 90%
  display flex
  flex-wrap wrap
  margin-left .293333rem
  .item
    width 1.6rem 
    line-height 2.5
    text-align center
    border-radius .8rem
    margin .16rem 
    background rgb(245, 245, 245)    
</style>