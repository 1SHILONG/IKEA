<template>
  <div class="container">
    <div class="content">
      <h1>登录<span>宜家</span>账号</h1>
      <h2>随时随地，将万千灵感装进口袋。</h2>
      <router-link to="/login">
        <button @click="login">
          <text>注册/登录</text>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
.container
  width 7.333333rem
  height calc(100vh - 1.413333rem)
  padding 0 1.333333rem
  background-color rgb(35, 96, 197)
  .content
    padding-top 35vh
    h1
      font-size .533333rem
      font-weight bold
      color white
      text-align center
      margin-bottom .373333rem
      span
        color yellow
    h2
      text-align center
      font-size .373333rem
      color rgba(237, 237, 237, 0.7)
    button
      width 4.8rem 
      height 1.333333rem 
      display block
      margin .373333rem auto
      border-radius 1.066667rem
      text
        color black
        font-size .426667rem 
        font-weight bold
</style>