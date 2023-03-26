<template>
  <div>
    <DHeader />
    <DMain />
    <DParticular />
    <DGoods />
    <DActionBar />
    <van-back-top right="15vw" bottom="15vh" />
  </div>
</template>

<script setup>
import DHeader from './components/DHeader.vue';
import DMain from './components/DMain.vue';
import DParticular from './components/DParticular.vue';
import DActionBar from './components/DActionBar.vue';
import DGoods from './components/DGoods.vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore();
const getGoodsList = async () => {
  await store.dispatch("home/GET_GOODSLIST", 1);
}
onMounted(async () => {
  await getGoodsList();
});
</script>

<style lang="stylus" scoped>

</style>