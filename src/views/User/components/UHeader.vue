<template>
  <div class="header">
    <img src="https://static.web.ikea.cn/static/images/photo.svg">
    <span>宜家用户</span>
    <van-icon class="icon" name="bullhorn-o" size=".533333rem" style="margin-right: .533333rem;" />
    <van-icon class="icon" name="setting-o" size=".533333rem" @click="showPopup" />
    <van-popup v-model:show="show" round style="padding: 20px 60px;" @click="quitLogin">退出登录</van-popup>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import { deleteLocal, TOKEN } from '../../../common/js/utils';
const store = useStore();
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
// 退出登录 并删除token
const quitLogin = () => {
  store.commit('login/SET_LOGIN', false)
  deleteLocal(TOKEN) 
}
</script>

<style lang="stylus" scoped>
.header
  padding .533333rem .266667rem
  img
    width 1.333333rem 
    height 1.333333rem 
  span
    display inline-block
    line-height 1.333333rem 
    width 5.866667rem 
    font-size .453333rem
    font-weight bold
    color black
    margin-left .533333rem 
  .icon
    color black
    font-weight bold
</style>