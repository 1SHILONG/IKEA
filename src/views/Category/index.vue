<template>
  <div>
    <CHeader />
    <van-tabs v-model:active="active" :sticky="true" offset-top="50px">
      <van-tab title="品类">
        <CFirst :firstList="firstList"/>
      </van-tab>
      <van-tab title="房间">
        <CSecond />
      </van-tab>
    </van-tabs>
  </div>
  <NavBar />
</template>

<script setup>
import NavBar from '~/NavBar.vue';
import CHeader from './components/CHeader.vue';
import CFirst from './components/CFirst.vue';
import CSecond from './components/CSecond.vue';
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const active = ref(0);
const firstList = computed(() => store.state.category.firstList)
const getCategoryData = async() => {
 await store.dispatch('category/GET_CATEGORY')
}
onMounted(async () => {
 await getCategoryData()
})
</script>

<style lang="stylus" scoped>

</style>