<template>
  <div>
    <div class="card">
      <router-link to="/vip">
      <div class="content">
        <div class="desc">
          <text style="color: white;font-size: 16px;font-weight: 500;">加入宜家俱乐部</text>
          <br/><text style="color: rgba(217,217,217,0.8);white-space: nowrap;">享受优惠福利、专属体验。</text>
        </div>
        <button>免费加入</button>
      </div>
    </router-link>
    </div>
    <van-grid square>
      <van-grid-item v-for="(item, index) in items" :key="index" :icon="item.icon" :text="item.text" />
    </van-grid>
    <div style="height: 8px;width: 100vw;background-color: rgba(217,217,217,0.4);"></div>
    <van-cell class="cell" title="收货地址" is-link center />
    <van-cell class="cell" title="分期付款" is-link center />
    <van-cell class="cell" title="购物卡余额查询" is-link center />
    <van-cell class="cell" title="在线客服" is-link center />
    <van-cell class="cell" title="问卷调查" is-link center />
  </div>
</template>

<script setup>
const items = [{ text: '我的订单', icon: "description" },
{ text: '我的收藏', icon: "star-o" },
{ text: '优惠券', icon: "coupon-o" },
{ text: '我的足迹', icon: "eye-o" },
{ text: '我的设计方案', icon: "notes-o" },
{ text: '商场活动预约', icon: "newspaper-o" },
{ text: '门店购物清单', icon: "tosend" },
{ text: '我的灵感', icon: "bulb-o" },
]
</script>

<style lang="stylus" scoped>
.card
  width 8.933333rem
  height 2.133333rem
  margin 0 .533333rem .533333rem 
  border-radius .266667rem 
  background-color rgb(5, 125, 214)
  .content
    display flex
    padding .533333rem 0 0 1.6rem
    button
      color black
      background white
      height .8rem
      width 2.133333rem
      margin auto 30px
      border-radius 1.066667rem
.cell
  height 1.6rem
</style>