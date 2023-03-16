<template>
  <div class="container">
    <h1 class="title">猜你喜欢</h1>
    <main class="goods">
      <van-skeleton title :row="3"  :loading="loading">
      <div class="col">
        <GoodsItem v-for="goods in leftGoods" :key="goods.id" :goods="goods" />
      </div>
      <div class="col">
        <GoodsItem v-for="goods in rightGoods" :key="goods.id" :goods="goods" />
      </div>
    </van-skeleton>
    </main>
  </div>
  <div class="text">到底了...</div> 
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import GoodsItem from "./GoodsItem.vue";
let loading = ref(true);
const store = useStore();
const leftGoods = computed(() => store.state.home.leftGoods);
const rightGoods = computed(() => store.state.home.rightGoods);
const getGoodsList = async () => {
  await store.dispatch("home/GET_GOODSLIST");
};
// 设置两列式瀑布流数据
const getGoodItemList = async () => {
  await store.dispatch("home/GET_GOODITEMLIST");
};
onMounted(async () => {
  // 有先后顺序 必须要先拿到GoodsList
  await getGoodsList();
  await getGoodItemList();
  loading.value = !loading.value
})
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin';
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