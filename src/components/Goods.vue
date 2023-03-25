<template>
  <div class="container">
    <h1 class="title">{{ state.text }}</h1>
    <div class="scroll" ref="scroll">
      <main class="goods">
        <van-skeleton title :row="3" :loading="state.loading">
          <div class="col">
            <GoodsItem v-for="goods in state.leftGoods" :key="goods.id" :goods="goods" />
          </div>
          <div class="col">
            <GoodsItem v-for="goods in state.rightGoods" :key="goods.id" :goods="goods" />
          </div>
        </van-skeleton>
      </main>
    </div>
  </div>
  <div class="text" v-if="show">到底了...</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import GoodsItem from './GoodsItem.vue';
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import { showToast } from 'vant'
import { useStore } from 'vuex';
//  按需加载 引入插件Pullup
BScroll.use(Pullup);
const scroll = ref(null);
let bs = null; 
let page = ref(2); // 首次上拉刷新 取第二页数据
const store = useStore();
const show = computed(() => store.state.home.isOver)
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
onMounted(() => {
  bs = new BScroll(scroll.value, { // 启用betterScroll
    probeType: 3,
    scrollY: true,
    click: true,
    pullUpLoad: true // 上拉加载
  })
  bs.on('pullingUp', async () => {
    if (show.value) { // 取完数据 不再重复请求
      return
    }
    showToast('加载中...')
    // 首次上拉加载 请求第二页数据
    await store.dispatch("home/GET_GOODSLIST", page.value);
    await store.dispatch("home/GET_GOODITEMLIST");
    page.value++;
    bs.finishPullUp() // 结束本次上拉行为 为下次上拉行为做准备
  })
})
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin';
.container
  width 100%
  background-color rgb(247, 248, 250)
  touch-action none // 阻止系统默认行为
  .title
    font-size .48rem 
    text-align center
    padding .266667rem 0
    color black
  .scroll
    height 2000px
    overflow scroll
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
