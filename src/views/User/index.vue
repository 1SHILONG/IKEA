<template>
  <div v-if="!store.state.login.isLogin">
  <IsLogin />
  </div>
  <div v-else>
    <UHeader />
    <UMain />
  </div>
  <NavBar/>
</template>

<script setup>
import NavBar from '~/NavBar.vue';
import IsLogin from '~/IsLogin.vue';
import UHeader from './components/UHeader.vue';
import UMain from './components/UMain.vue';
import { useStore } from 'vuex';

const store = useStore();
</script>

<style lang="stylus" scoped>

</style>