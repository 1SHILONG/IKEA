<template>
  <div class="navbar">
    <ul class="nav-list">
      <!-- 页面跳转 -->
      <router-link class="nav-list-item" to="home">
        <div v-if="!props.isToggle" @click="backTop">
          <van-icon name="wap-home-o" />
          <div>首页</div>
        </div>
        <div @click="backTop" v-else>
          <van-icon name="back-top" id="backTop" />
          <div>回顶部</div>
        </div>
      </router-link>
      <router-link class="nav-list-item" to="category">
        <van-icon class-prefix="my-icon" name="category" />
        <div>分类</div>
      </router-link>
      <router-link class="nav-list-item" to="cart">
        <van-icon name="shopping-cart-o" />
        <div>购物袋</div>
      </router-link>
      <router-link class="nav-list-item" to="user">
        <van-icon name="manager-o" />
        <div>我的</div>
      </router-link>
    </ul>
  </div>
  <div class="container">
  </div>
</template>

<script setup>
import '@/assets/icons/category/category.css'; // 引入自定义图标
const props = defineProps({
  isToggle: {
    type: Boolean,
    default: false
  }
})
// 回到顶部
const backTop = () => {
  let scrollTop = window.pageYOffset || document.documentElement || document.body.scrollTop;
  if (scrollTop > 0) { // 防止频繁点击
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin.styl';
.container
  wh(100%, 1.413333rem)
.navbar
  position fixed 
  left 0
  bottom 0
  width 100%
  padding .13333rem 0
  z-index 1000
  background-color #fff
  border-top .053333rem solid #fafafa
  transform translateZ(0)
  -webkit-transform translateZ(0)
  .nav-list
    width 100%
    fj()
    padding 0
    .nav-list-item
      flex 1
      flex-direction column
      text-align center
      color #666
      i
        text-align center
        font-size .58667rem
      span
        font-size .32rem
      &.active
        color $primary
      &.router-link-active
        color $primary
.my-icon
  line-height 1
</style>