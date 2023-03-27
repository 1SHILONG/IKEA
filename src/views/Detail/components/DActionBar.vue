<template>
  <div class="d-action-bar">
    <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <!-- 购物车徽标 未有商品数时 不显示 -->
    <van-action-bar-icon 
      icon="cart-o" 
      text="购物袋" 
      :badge="o.totalQuantity > 0 ? o.totalQuantity : ''" 
      @click="toCart" 
    />
    <van-action-bar-icon icon="shop-o" text="店铺" />
    <div class="button">
    <van-button class="l-button" plain round type="primary" text="加入购物袋" @click="showPopup" />
    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '70%' }"
    >
    <DPopup :product="product" @changeShow="changeShow"/>
    </van-popup>
    <van-button class="r-button" round color="#23579c" type="primary" text="立即购买" @click="submit"/>
    </div>
  </div>
  <div class="container"></div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import DPopup from './DPopup.vue'
import { showSuccessToast } from 'vant';
const store = useStore();
const router = useRouter();
const show = ref(false)
// 获得子组件传递的值 关闭弹出层
const changeShow = (res) => {
  show.value = res
}
const o = computed(() => store.getters['cart/totalProducts']); // 拿到购物车数量数据
let product = store.state.detail.description; // 拿到当前商品
const toCart = () => router.push('/cart');
// 加入购物车 弹出层
const showPopup = () => {
  show.value = true
}
const submit = () => {
  showSuccessToast('请您支付坤坤🐔')
}
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';

.d-action-bar
  wh(calc(100vw - .533333rem), 1.6rem)
  position fixed
  bottom 0
  left 0
  background-color white
  padding 0 .266667rem
  display flex
  z-index 999
  .icon
    flex 1
  .button
    width 6.4rem
    margin auto 0
    .l-button
      width 2.72rem 
      margin-right .16rem
    .r-button
      width 2.72rem 
.container
  wh(100%, 1.6rem)
</style>