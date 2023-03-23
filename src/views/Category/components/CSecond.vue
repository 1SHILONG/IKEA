<template>
  <div class="container" v-for="item in secondList" :key="index">
    <router-link to="/other">
      <img :src="item.imgSrc" v-lazy="item.imgSrc">
    </router-link>
    <div class="title">{{ item.title }}</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore()
const secondList = computed(() => store.state.category.secondList)
</script>

<style lang="stylus" scoped>
.container
  height 100px
  width 355px
  padding .533333rem .266667rem 0 .266667rem
  position relative
  img
    width 100%
    height 100%
    border-radius .133333rem 
    object-fit cover
  .title
    position absolute
    top 50%
    left 40px
    font-size .426667rem 
    font-weight bold
    color white
</style>