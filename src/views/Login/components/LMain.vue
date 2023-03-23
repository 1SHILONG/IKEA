<template>
  <div class="content">
    <div v-if="state.show" class="sign-in">
      <van-form @submit="onSubmit" ref="login">
        <van-cell-group inset>
          <van-field 
            v-model="state.username" 
            name="username" 
            label="用户名" 
            placeholder="用户名" 
            colon="true"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field 
            v-model="state.password" 
            type="password" 
            name="password" 
            label="密码" 
            clear
            placeholder="密码" 
            colon="true"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button 
            round 
            block 
            type="primary" 
            native-type="submit"
          >
            登录
          </van-button>
        </div>
        <div style="text-align: center;" @click="toggle">
          未有登录账号，前去注册
        </div>
      </van-form>
    </div>
    <div class="sign-up" v-else>
      <van-form @submit="onSubmit" ref="register">
        <van-cell-group inset>
          <van-field 
            v-model="state.regname" 
            name="regname" 
            label="请输入用户名" 
            label-width=100 
            placeholder="用户名" 
            colon="true"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field 
            v-model="state.regpassword" 
            type="password" 
            name="regpassword" 
            label-width=100 
            label="请输入密码"
            placeholder="密码" 
            colon="true" 
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button 
            round 
            block 
            type="primary" 
            native-type="submit"
          >
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
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { doLogin } from '@/service/login';
import { setLocal, TOKEN } from '@/common/js/utils.js'
import { showFailToast, showSuccessToast } from 'vant';
import md5 from 'js-md5'; // 单向加密
const state = reactive({
  show: true,
  username: '',
  password: '',
  regname: '',
  regpassword: '',
})
const login = ref(null); // 标记登录表单节点
const register = ref(null); // 标记注册表单节点
const toggle = () => state.show = !state.show; // 切换登录 注册
const store = useStore(); 
const onSubmit = async (values) => {
  if (register.value) { // 拿到注册页的values
    values.regpassword = md5(values.regpassword) // 密码不能明文传输
    const res = await doLogin(values, 'register') 
    res ? showFailToast('用户已注册') : toggle(); // 是否重复注册
  } else if (login.value) { // 拿到登录页的values
    values.password = md5(values.password)
    const data = await doLogin(values, 'login')
    if (data.code != 0) { // 登录失败
      showFailToast(data.msg) // 提示失败原因
    } else { // 成功登录
      if (data.token) { // 本地存储token
        setLocal(TOKEN, data.token)
      }
      showSuccessToast(data.msg);
      store.state.login.isLogin = true;
      history.back(); // 成功登录并返回原页面
    }
  }
};
</script>

<style lang="stylus" scoped>
.content
  height calc(100vh - 8rem)
  padding-top 2.133333rem
</style>