<template>
  <div class="container">
    <h1 style="color: black;font-size: 16px;margin-bottom: 6px;">商品详情</h1>
    <van-text-ellipsis
      rows="5"
      :content="text"
      expand-text="展开"
      collapse-text="收起"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from 'vue';
const store = useStore();
const text = store.state.detail.particular
</script>

<style lang="stylus" scoped>
.container
  padding .533333rem 
  font-size 14px
</style>