<template>
  <div class="container">
    <div class="d-main-hd">
      <div>
        <van-cell title="规格" is-link arrow-direction="down" value="内容" />
        <van-cell title="参数" is-link arrow-direction="down" label="材质尺寸、包装、组装说明等" />
        <van-cell title="服务" is-link arrow-direction="down" label="🔧组装服务 🧰送货服务 🪝退货服务" />
        <div class="address">
          <van-cell title="南昌市青山湖区在售" icon="location-o" />
          <van-cell title="查询宜家本地商场库存" icon="desktop-o" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.container
  background #f7f7f7
  .d-main-hd
    wh(100%, 6.133333rem)
    padding .16rem 0
  .address
    wh(100%, 3.093333rem)
    padding .16rem 0
</style>