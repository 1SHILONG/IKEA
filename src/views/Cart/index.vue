<template>
  <div v-if="!store.state.login.isLogin">
  <IsLogin />
  </div>
  <div v-else>
    <div v-if="!length">
      <Empty />
    </div>
    <div v-else>
      <CProducts />
    </div>
    <CGoods />
  </div>
  <NavBar/>
</template>

<script setup>
import NavBar from '~/NavBar.vue';
import IsLogin from '~/IsLogin.vue';
import Empty from './components/Empty.vue';
import CGoods from './components/CGoods.vue';
import CProducts from './components/CProducts.vue';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import { closeToast, showLoadingToast } from 'vant';
const store = useStore();
const length = computed(() => store.getters['cart/length'])
showLoadingToast({
  message: '加载中...',
  forbidClick: true,
  overlay: true,
  duration: 0,
  overlayStyle: { backgroundColor: "#fff" }
});

const getGoodsList = async () => {
  await store.dispatch("home/GET_GOODSLIST");
}
onMounted(async () => {
  await getGoodsList();
  closeToast()
});
</script>

<style lang="stylus" scoped>

</style>