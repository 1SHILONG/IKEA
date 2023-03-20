<template>
  <div v-if="!store.state.login.isLogin">
  <IsLogin />
  </div>
  <div v-else>
    <div v-if="false">
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
import { onMounted } from 'vue';
const store = useStore();
const getGoodsList = async () => {
  await store.dispatch("home/GET_GOODSLIST");
}
onMounted(async () => {
  await getGoodsList();
});
</script>

<style lang="stylus" scoped>

</style>