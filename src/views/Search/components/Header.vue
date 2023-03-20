<template>
  <div class="s-header">
    <van-icon name="arrow-left" class="arrow" @click="back" />
    <van-search shape="round" v-model="value" show-action clearable placeholder="手推车">
      <template #action>
        <div @click="onClickButton" class="button">搜索</div>
      </template>
    </van-search>
  </div>
  <div class="logs" v-if="showLogs">
    <div class="lg-header">
      <text class="title">搜索历史</text>
      <van-icon name="delete-o" class="icon" @click="clear" />
    </div>
    <div class="lg-main">
      <div class="lg-item" v-for="(item, index) in items" :key="index">
        <div class="lg-container">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getLocal, setLocal, deleteLocal, LOGS } from "@/common/js/utils";

const value = ref('');
const showLogs = ref(false);
const logs = ref([]);
const router = useRouter();
const items = new Set(JSON.parse(getLocal(LOGS)));
const setLogs = (val) => {
  logs.value.push(val); // 存入输入值
  setLocal(LOGS, JSON.stringify(logs.value)); // 数组对象序列化存储
}
const onClickButton = () => {
  if (value.value.trim()) { // 防止输入空格也跳转
    if (getLocal(LOGS)) { // 持久化 重新回到页面也能得到之前的记录
      // 把之前每个数据依次存入数组
      JSON.parse(getLocal(LOGS)).forEach((val) => logs.value.push(val))
    };
    setLogs(value.value);
    value.value = '';
    router.push('/level');
  } else { // 将默认值作为搜索值
    if (getLocal(LOGS)) { // 
      JSON.parse(getLocal(LOGS)).forEach((val) => logs.value.push(val))
    };
    setLogs('手推车');
    router.push('/level');
  }
};
const back = () => {
  router.go(-1); // 返回上一页
}
const clear = () => {
  deleteLocal(LOGS); // 把本地logs清空
  showLogs.value = false; // 隐藏历史记录
}
onMounted(() => {
  if (getLocal(LOGS)) showLogs.value = true; // 有搜索结果显示历史记录
})
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';
.s-header
  display flex
  border-bottom 1px solid rgb(245, 245, 245)
  .arrow
    margin auto .266667rem 
    color rgb(17, 17, 17)
    font-size .426667rem
  .van-search
    width 9.333333rem
  .button
    width 1.573333rem
    border-radius .453333rem 
    text-align center
    background black
    color white
.lg-header
  padding .533333rem
  .title
    font-size .426667rem
    font-weight bold
    color black
  .icon
    font-size .48rem
    font-weight bold
    float right
.lg-main
  width 90%
  display flex
  flex-wrap wrap
  margin-left .293333rem
  .lg-item
    line-height 2.5
    text-align center
    border-radius .533333rem
    margin .16rem 
    background rgb(245, 245, 245)
    .lg-container
      padding 0 .266667rem
</style>