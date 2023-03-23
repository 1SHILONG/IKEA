<template>
  <div style="width: 100vw;">
    <DNavBar />
    <Swiper :swiperList="swiperList" autoplay="0"/>
    <router-link class="vip-bar" to="/vip"> 
      <div class="vip-icon">
        <van-icon name="coupon-o" class="coupon-o"/>
      </div>
        <text class="vip-title">加入会员，享99元减5元新人券</text>
      <van-icon name="arrow" class="arrow"/>
    </router-link>
    <div class="content">
      <h1>{{ description.title }}</h1>
      <h3>{{ description.desc }}</h3>
      <div class="price">
        <sup>￥</sup>
        <text>{{description.price}}</text> 
        <sup>.00</sup>
      </div>
      <p class="detail">{{ description.detail }}</p>
      <div class="number">{{ description.number }}</div>
    </div>
  </div>
</template>

<script setup>
import Swiper from '@/components/Swiper.vue';
import DNavBar from './DNavBar.vue';
import { computed , onMounted } from 'vue';
import { useStore } from "vuex";

const store = useStore();
const swiperList = computed(() => store.state.detail.swiperList);
const description = computed(() => store.state.detail.description);
onMounted(async () => {

})
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.vip-bar
  width 8.933333rem
  height 1.386667rem
  padding 0 .533333rem
  background-color #337ab9
  display flex
  .vip-icon
    wh(1.013333rem, 1.013333rem)
    border-radius .533333rem
    background-color #fff
    margin-top .213333rem
    .coupon-o
      font-size .693333rem
      margin .16rem
  .vip-title
    line-height 1.386667rem
    font-size .373333rem
    font-weight bold
    color white
    margin-left 8px
  .arrow
    font-size .693333rem
    margin 12px 0 10px 60px
    color white
.content
  padding .8rem .533333rem
  box-sizing border-box
  wh(100%, 6.666667rem)
  h1
    color black
    font-size .48rem
    font-weight bold
  .price
    display flex
    margin-top .213333rem
    height .8rem 
    color black
    text
      font-size .48rem
  .detail
    margin 8px 0
    color #6a6a6a
  .number
    wh(2.133333rem, .693333rem)
    line-height .693333rem
    text-align center
    background-color #f8f8f8
    color black
</style>