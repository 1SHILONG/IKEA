<template>
  <Goods :leftGoods="leftGoods" :rightGoods="rightGoods" :loading="loading" :text="text"/>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import Goods from "@/components/Goods.vue";
let loading = ref(true);
const text = ref('相关商品')
const store = useStore();
const leftGoods = computed(() => store.state.home.leftGoods);
const rightGoods = computed(() => store.state.home.rightGoods);
// 设置两列式瀑布流数据
const getGoodItemList = async () => {
  await store.dispatch("home/GET_GOODITEMLIST");
};
onMounted(async () => {
  await getGoodItemList();
  loading.value = !loading.value
})
</script>

<style lang="stylus" scoped>
</style>