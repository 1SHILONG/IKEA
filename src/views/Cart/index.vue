<template>
  <div v-if="!store.state.login.isLogin">
  <IsLogin />
  </div>
  <div v-else>
    <div v-if="true">
      <Empty />
    </div>
    <div v-else>
      
    </div>
  </div>
  <NavBar/>
</template>

<script setup>
import NavBar from '~/NavBar.vue';
import IsLogin from '~/IsLogin.vue';
import Empty from './components/Empty.vue';
import { useStore } from 'vuex';

const store = useStore();

</script>

<style lang="stylus" scoped>

</style>