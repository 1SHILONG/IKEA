<template>
  <div class="d-nav-bar van-hairline--bottom">
    <div class="arrow">
      <van-icon name="arrow-left" @click="back" />
    </div>
    <div class="share-bar">
      <van-cell @click="showShare = true" />
      <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" @select="onSelect" />
    </div>
    <van-icon name="share-o" class="share" />
    <van-icon name="ellipsis" class="ellipsis" />
  </div>
  <div class="container"></div>
</template>

<script setup>
import { showToast } from 'vant'
import { ref } from 'vue';
const back = () => {
  history.back()
}
const showShare = ref(false);
const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

const onSelect = (option) => {
  showToast(option.name);
  showShare.value = false;
};
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.container
  height 1.333333rem
  width 100vw 
.d-nav-bar
  position fixed
  z-index 1000
  background-color #fff
  top 0
  left 0
  height 1.333333rem
  width 100vw
  display flex
  .arrow
    width 7.2rem
    padding-left .533333rem 
    line-height 1.333333rem
    font-size 20px
  .share-bar
    position absolute
    width .533333rem
    height 100%
    left 7.733333rem 
  .share
    font-size 20px
    line-height 1.333333rem
    flex 1
    pointer-events none
  .ellipsis
    font-size 20px
    line-height 1.333333rem
    flex 1
</style>