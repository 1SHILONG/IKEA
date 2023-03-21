<template>
  <div class="item" @click="gotoDetail(props.goods.id)">
      <div>
        <img :src="goods.imgSrc" :style="{ height: `${props.goods.height}px`}"/>
      </div>
      <p class="title">{{goods.title}}</p>
      <p class="desc">{{goods.desc}}</p>
      <p class="price">
        <sup>￥</sup>
        <text>{{goods.price}}</text> 
        <sup>.00</sup>
      </p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter(); // 全局路由对象
const store = useStore(); // 将商品ID传递出去
const props = defineProps({
  goods: {
      type: Object,
      default: {}
  }
})
// 带参数跳转至详情页 通过id取到对应的商品数据
const gotoDetail = async (id) => {
  await store.dispatch('detail/GET_DETAILDATA', id)
  router.push({
      path: `/detail/${id}`
  });
}
</script>

<style lang="stylus" scoped>
.item
  background-color #fff
  margin-bottom .213333rem 
  padding .213333rem 
img 
  width 100%
.title
  color black 
.desc
  color gray
.price
  display flex
  margin-top .213333rem
  height .8rem 
  color black
  text
    font-size .48rem
</style>