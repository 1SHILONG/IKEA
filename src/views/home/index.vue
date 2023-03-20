<template>
  <div v-if="loading">
    <van-image width="100vw" height="100vh" fit="fill" position="50% 50%">
      <template v-slot:loading>
        <van-loading type="spinner" size="20">加载中...</van-loading>
      </template>
    </van-image>
  </div>
  <div style="width: 100vw;" v-else>
    <!-- 顶部导航 -->
    <HomeHeader :isSort="isSort" />
    <!-- 轮播图 -->
    <Swiper :swiperList="swiperList" />
    <!-- 消息通知栏 -->
    <NoticeBar />
    <!-- 横幅滑动栏 -->
    <HomeBanner :bannerList="bannerList" />
    <!-- 商品区 -->
    <HomeGoods />
    <!-- 标签栏 -->
    <NavBar :isToggle="isToggle" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, nextTick, onBeforeUnmount, onActivated } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";
import NavBar from "~/NavBar.vue";
import Swiper from "@/components/Swiper.vue";
import HomeHeader from "./components/HomeHeader.vue";
import HomeBanner from "./components/HomeBanner.vue";
import NoticeBar from "./components/NoticeBar.vue";
import HomeGoods from "./components/HomeGoods.vue";
import { getLocal, setLocal} from "@/common/js/utils";
import _ from 'lodash';

const loading = ref(true);
const isSort = ref(false);
const isToggle = ref(false);
const store = useStore(); // 拿到中央数据
const swiperList = computed(() => store.state.home.swiperList);
const bannerList = computed(() => store.state.home.bannerList);
// 封装请求 在onMounted里尽量少放逻辑
const getSwiperList = async () => {
  await store.dispatch("home/GET_SWIPERLIST");
};
const getBannerList = async () => {
  await store.dispatch("home/GET_BANNERLIST");
};
const getGoodsList = async () => {
  await store.dispatch("home/GET_GOODSLIST");
}
// 监听滚动触发事件
const setHeaderScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement || document.body.scrollTop;
  // 头部搜索栏缩放
  if (scrollTop > 0) {
    if (!isSort.value) {
      isSort.value = true;
    }
  } else {
    if (isSort.value) {
      isSort.value = false;
    }
  };
  // 回到顶部事件
  if (scrollTop > 200) {
    if (!isToggle.value) {
      isToggle.value = true;
    }
  } else {
    if (isToggle.value) {
      isToggle.value = false;
    }
  };
};
// 方便卸载时移除监听
const throttleHandleScroll = _.throttle(setHeaderScroll, 200);
nextTick(() => { // 更早拿到更新数据
  window.addEventListener('scroll', _.throttle(setHeaderScroll, 200));
})
onMounted(async () => {
  // 并发执行请求 只要最慢的请求时间完成即可
  await Promise.all([getSwiperList(), getBannerList(),getGoodsList()]);
  loading.value = !loading.value;
});
onBeforeUnmount(() => { // 卸载时移除监听的事件
  window.removeEventListener('scroll', throttleHandleScroll);
})
onActivated(() => { // 进入Home页面触发 恢复至退出前的位置
  if (getLocal('scroll')) {
    window.scrollTo(0, parseInt(getLocal('scroll')));
  }
})
onBeforeRouteLeave(() => { // 退出Home页面时记录 当前位置
  setLocal('scroll', document.documentElement.scrollTop);
})
</script>

<style lang="stylus" scoped>

</style>