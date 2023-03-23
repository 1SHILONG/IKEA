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
      <CItem v-for="item in firstList" :key="index" :items="item.goods" :title="item.title" />
    </div>
  </div>
</template>

<script setup>
import { reactive, nextTick, onBeforeUnmount } from 'vue';
import _ from 'lodash';
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
  window.scrollTo(0, 500 * index)
}
// 滚动响应侧边栏高亮
const categoryScroll = (firstList) => {
  let scrollTop = window.pageYOffset || document.documentElement || document.body.scrollTop;
  let x = Math.floor(scrollTop / 400)
  switch (x) {
    case 0:
    state.show = Array(firstList.length) 
    state.show[x] = true
    break;
    case 1:
    state.show = Array(firstList.length) 
    state.show[x] = true
    break;
    case 2:
    state.show = Array(firstList.length) 
    state.show[x] = true
    break;
    case 3:
    state.show = Array(firstList.length) 
    state.show[x] = true
    break;
    case 4:
    state.show = Array(firstList.length) 
    state.show[x] = true
    break;
    case 5:
    state.show = Array(firstList.length) 
    state.show[x] = true
    break;
    case 6:
    state.show = Array(firstList.length) 
    state.show[x] = true
    break;
    case 7:
    state.show = Array(firstList.length) 
    state.show[x] = true
    break;
  }
}
const handleScroll = _.throttle(categoryScroll, 200);
nextTick(() => { // 更早拿到更新数据
  window.addEventListener('scroll', _.throttle(categoryScroll, 200));
})
onBeforeUnmount(() => { // 卸载时移除监听的事件
  window.removeEventListener('scroll', handleScroll);
})


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