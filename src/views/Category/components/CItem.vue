<template>
  <h1>{{ title }}</h1>
  <div class="container">
    <van-skeleton title :row="3" :loading="loading">
    <van-grid :column-num="2" :border="false">
      <van-grid-item v-for="item in items" :key="index">
        <van-image lazy-load :src="item.imgSrc" />
        <text>{{ item.text }}</text>
      </van-grid-item>
    </van-grid>
  </van-skeleton>
  </div>
</template>

<script setup>
import { closeToast, showLoadingToast } from 'vant';
import { ref, onMounted } from 'vue';
const loading = ref(true)
defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: []
  }
})
showLoadingToast({
  message: '加载中...',
  forbidClick: true,
  overlay: true,
  duration: 0,
  overlayStyle: { backgroundColor: "#fff" }
});
onMounted(() => {
  loading.value = false
  closeToast()
})
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.container
  width 6.266667rem /* 235/37.5 */
  padding .266667rem .533333rem /* 20/37.5 */
h1 
  font-size 16px
  text-align center
</style>