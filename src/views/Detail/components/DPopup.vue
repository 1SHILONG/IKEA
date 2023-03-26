<template>
  <div>
    <van-card 
      :price="props.product.price" 
      :desc="props.product.desc" 
      :title="props.product.title" 
      :thumb="props.product.imgSrc"
    />
    <div class="count">数量</div>
    <van-stepper v-model="count" theme="round" button-size="22" disable-input />
    <div class="button">
      <van-button type="primary" block round color="#115799" @click="addToCart">确定</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const props = defineProps({
  product: {
    type: Object,
    default: {}
  }
})
let count = ref(1)
// 子组件通信
const emit = defineEmits(['changeShow'])
const store = useStore()
const router = useRouter()
const isLogin = store.state.login.isLogin
const addToCart = () => {
  if (!isLogin) {
    router.push({
      path: '/login'
    })
  } else {
    props.product.count = count.value < props.product.inventory ? count.value : props.product.inventory;
    store.commit('cart/SET_PRODUCTS', props.product); // 添加商品至购物车
    emit('changeShow', false) // 向父组件传值 关闭弹出层
  }
}
</script>

<style lang="stylus" scoped>
.van-card
  background-color #fff
  margin-top .533333rem
.button
  margin .533333rem
.count
  font-size .426667rem
  color black
  margin .266667rem .533333rem
</style>