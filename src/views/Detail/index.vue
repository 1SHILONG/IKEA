<template>
  <div>
    <DHeader />
    <DMain />
    <DActionBar />
    <div class="container"></div>
  </div>
</template>

<script setup>
import DHeader from './components/DHeader.vue';
import DMain from './components/DMain.vue';
import DActionBar from './components/DActionBar.vue';
import { showLoadingToast, closeToast } from 'vant';
showLoadingToast({
  duration: 0,
  overlay: true
})
closeToast()
</script>

<style lang="stylus" scoped>
.container
  width 100vw
  height 1.6rem
</style>