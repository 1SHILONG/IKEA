<template>
  <div class="container">
    <div class="sidebar">
      <div 
        class="text" 
        :class="{'active': state.show[index]}" 
        v-for="(item, index) in firstList"
        :key="index" 
        @click="onClick(index, firstList)"
      >
      {{ item.title }}
    </div>
    </div>
    <div style="width: 108px;background-color: #f7f8fa;"></div>
    <div class="goods" >
      <CItem v-for="item in firstList" :key="index" :items="item.goods" :title="item.title"/>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import CItem from './CItem.vue';
defineProps({
  firstList: {
    type: Array,
    default: []
  }
})

let state = reactive({
  show: [true] // 高亮效果默认选择第一项
})

const onClick = (index, firstList) => {
  state.show = Array(firstList.length) 
  state.show[index] = true
}



</script>

<style lang="stylus" scoped>
.container
  display flex
  height auto
  .sidebar
    position fixed
    top 94px
    left 0
    width 100px
    background-color #f7f8fa
    .text
      width 100px
      height 50px
      line-height 50px
      text-align center
    .active
      color #2566cb
      background-color #fff
  .goods
    width 7.866667rem /* 295/37.5 */
</style>