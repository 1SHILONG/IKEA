<template>
  <van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
  <img src="https://i.328888.xyz/2023/03/11/sezvN.jpeg" style="object-fit: cover;width: 100vw;height: 100vh;">
</template>

<script setup>
const onClickLeft = () => history.back();
</script>

<style lang="stylus" scoped>

</style>