<template>
  <Header />
  <Guess />
  <Hot />
  <router-view></router-view>
</template>

<script setup>
import Header from '@/views/Search/components/Header.vue'
import Guess from '@/views/Search/components/Guess.vue'
import Hot from '@/views/Search/components/Hot.vue'
</script>

<style lang="stylus" scoped>

</style>