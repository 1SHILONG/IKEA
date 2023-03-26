<template>
  <h1>购物袋</h1>
  <div style="width: 100vw;height: .053333rem;background-color: rgba(217,217,217,0.4);"></div>
  <van-checkbox-group v-model="checked" ref="checkboxGroup">
    <van-swipe-cell v-for="item in products" :key="item.id">
        <van-checkbox :name="item.id" v-model="checked" class="che-button"></van-checkbox>
        <van-card 
          :num="item.quantity" 
          :price="item.price" 
          :desc="item.desc" 
          :title="item.title" 
          class="goods-card"
          :thumb="item.imgSrc"
        />
      <template #right>
        <van-button 
        square 
        text="删除" 
        type="danger" 
        class="delete-button"
        @click="deleteProduct(item)" 
        />
      </template>
    </van-swipe-cell>
    <van-submit-bar :price="o.totalPrice" button-text="提交订单" @submit="onSubmit(o.totalPrice)">
      <van-checkbox v-model="checked" icon-size="24px" @click="checkAll"></van-checkbox>
    </van-submit-bar>
  </van-checkbox-group>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { showToast } from 'vant';
const store = useStore()
const checked = ref([]);
const checkboxGroup = ref(null);
let x = ref(false)
const checkAll = () => {
  x = !x 
  checkboxGroup.value.toggleAll(x); // 全选 反选
}
const products = computed(() => store.getters['cart/cartProducts']) // 拿到商品数据 
const o = computed(() => store.getters['cart/totalProducts']) // 拿到总量数据
const deleteProduct = (item) => { // 删除商品项
  if (store.state.cart.products.get(item.id)) {
    store.commit('cart/DETALE_PRODUCT', item.id)
  }
}
const onSubmit = (val) => {
  showToast(`请您支付${val / 100}只因🐔`)
}
</script>

<style lang="stylus" scoped>
h1
  padding .533333rem
  font-size .533333rem
  color black
.goods-card 
  display inline-block
  width 8.8rem
  background-color #fff
.che-button
  display inline-block
  width .8rem 1.066667rem
  margin 0 0 1.066667rem .4rem
.delete-button 
  height 100%
.van-submit-bar
  bottom 1.333333rem 
</style>