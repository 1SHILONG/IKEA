<template>
  <div class="header">
    <div class="button" @click="back">
      <van-icon name="arrow-left" class="arrow"/>
    </div>
    <div class="content">
      <h1>欢迎<br />来到<text style="color: yellow;">宜家</text></h1>
      <span>随时随地探索家居灵感。</span>
    </div>
  </div>
</template>

<script setup>
const back = () => {
  history.back()
}
</script>

<style lang="stylus" scoped>
.header
  width 100vw
  height 5.333333rem /* 200/37.5 */
  padding-top 20px
  background #0058a3
  .button
    margin-left 20px
    width .8rem
    height .8rem
    background-color #fff
    border-radius .4rem 
    position relative
    .arrow
      position absolute
      top .133333rem /* 5/37.5 */
      left .106667rem /* 4/37.5 */
      font-size .533333rem /* 20/37.5 */
      color black
  .content
    height 3.2rem
    margin .8rem 0 0 .533333rem /* 20/37.5 */
    h1
      font-size .8rem /* 30/37.5 */
      font-weight bold
      color white
    span 
      color white


</style>