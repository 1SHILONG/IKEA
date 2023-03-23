<template>
  <h1 class="title">从房间开始,
    <span class="gray">
      &nbsp探索家居灵感。
    </span>
  </h1>
  <div class="container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content" ref="content">
        <div class="sct-item" v-for="item in props.bannerList" :key="index" v-lazy="item">
            <img :src="item.imgSrc"/>
            <div class="dsc-item">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BScroll from '@better-scroll/core';

const props = defineProps({
  bannerList: {
    type: Array,
    default: []
  }
})
const scroll = ref(null);
const content = ref(null);
let bs = null;
let wrapperWidth = 0;
let contentWidth = 0;
onMounted(() => {
  wrapperWidth = scroll.value.offsetWidth;
  contentWidth = content.value.offsetWidth;
  bs = new BScroll(scroll.value, {
    probeType: 3,
    scrollX: true,
    scrollY: false,
  })
})

</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.title 
  margin-left .533333rem  
  font-size .48rem 
  margin-top .48rem  
  font-weight bold
  color rgb(0, 0, 0)
  .gray
    color rgb(126, 126, 126)
.container
  text-align center
  .scroll-wrapper
    width 90%
    margin .266667rem auto
    white-space nowrap 
    border-radius 5px
    overflow hidden
    .scroll-content
      display inline-block
      .sct-item
        display inline-block
        padding-right 12px
        font-size 24px 
        text-align center
        position relative
        &:last-child
          padding-right 0
        img
          border-radius 5%
          wh(3.333333rem, 4rem)
        .dsc-item
          position absolute
          font-weight bold
          bottom  10% 
          left  20% 
          font-size .426667rem
          color #fff

</style>