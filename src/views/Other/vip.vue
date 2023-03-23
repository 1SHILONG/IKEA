<template>
  <van-nav-bar
  title="加入会员"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
  <img src="https://i.328888.xyz/2023/03/23/iZPdww.jpeg" style="object-fit: cover;width: 100vw;height: 100vh;">
</template>

<script setup>
import { showLoadingToast } from 'vant';
showLoadingToast({
  message: '加载中...',
  forbidClick: true,
  overlay: true,
  overlayStyle: { backgroundColor: "#fff" }
});
const onClickLeft = () => history.back();

</script>

<style lang="stylus" scoped>

</style>