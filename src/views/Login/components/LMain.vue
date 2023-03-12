<template>
  <div class="content">
  <div v-if="show" class="sign-in">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field 
          v-model="username" 
          name="用户名" 
          label="用户名" 
          placeholder="用户名" 
          colon="true"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field 
          v-model="password" 
          type="password" 
          name="密码" 
          label="密码" 
          placeholder="密码" 
          colon="true"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary"  native-type="submit">
          登录
        </van-button>
      </div>
      <div style="text-align: center;" @click="toggle">
        未有登录账号，前去注册
      </div>
    </van-form>
  </div>
  <div class="sign-up" v-else>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field 
          v-model="username" 
          name="用户名" 
          label="请输入用户名" 
          label-width=100
          placeholder="用户名" 
          colon="true"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field 
          v-model="password" 
          type="password" 
          name="密码" 
          label-width=100
          label="请输入密码" 
          placeholder="密码" 
          colon="true"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary"  native-type="submit">
          注册
        </van-button>
      </div>
      <div style="text-align: center;" @click="toggle">
        已有登录账号，前去登录
      </div>
    </van-form>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(true)
const username = ref('');
const password = ref('');
const onSubmit = (values) => {
  console.log('submit', values);
};
const toggle = () => show.value = !show.value;
</script>

<style lang="stylus" scoped>
.content
  height calc(100vh - 5.866667rem)
  padding-top 2.133333rem
</style>