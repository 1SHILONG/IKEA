<template>
  <div v-if="loading">
    <van-image width="100vw" height="100vh" fit="fill" position="50% 50%">
      <template v-slot:loading>
        <van-loading type="spinner" size="20">加载中...</van-loading>
      </template>
    </van-image>
  </div>
  <div v-else>
    <!-- 顶部导航 -->
    <HomeHeader :isSort="isSort" />
    <!-- 轮播图 -->
    <HomeSwiper :swiperList="swiperList" />
    <!-- 消息通知栏 -->
    <NoticeBar />
    <!-- 横幅滑动栏 -->
    <HomeBanner :bannerList="bannerList"/>
    <!-- 商品区 -->
    <HomeGoods />
    <!-- 标签栏 -->
    <NavBar :isToggle="isToggle" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, nextTick, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import NavBar from "~/NavBar.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import HomeHeader from "./components/HomeHeader.vue";
import HomeBanner from "./components/HomeBanner.vue";
import NoticeBar from "./components/NoticeBar.vue";
import HomeGoods from "./components/HomeGoods.vue";
import _ from 'lodash';

const loading = ref(true);
const isSort = ref(false);
const isToggle = ref(false);
const store = useStore(); // 拿到中央数据
const swiperList = computed(() => store.state.home.swiperList);
const bannerList = computed(() => store.state.home.bannerList);

const getSwiperList = async () => {
  await store.dispatch("home/GET_SWIPERLIST");
};
const getBannerList = async () => {
  await store.dispatch("home/GET_BANNERLIST");
};
// 监听滚动触发事件
const setHeaderScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement || document.body.scrollTop;
  if (scrollTop > 0) {
    isSort.value = true;
  } else {
    isSort.value = false;
  };
  if (scrollTop > 200) {
    isToggle.value = true
  } else {
    isToggle.value = false
  };
};
const throttleHandleScroll =  _.throttle(setHeaderScroll, 200);
nextTick(() => {
  window.addEventListener('scroll', _.throttle(setHeaderScroll, 200))
})

onMounted(async () => {
  await getSwiperList();
  await getBannerList();
  loading.value = !loading.value;
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', throttleHandleScroll);
})
</script>

<style lang="stylus" scoped>

</style>