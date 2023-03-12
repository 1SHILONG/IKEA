<template>
  <div v-if="isLogin">
  <IsLogin />
  </div>
  <div v-else>
    Cart
  </div>
  <NavBar/>
</template>

<script setup>
import NavBar from '~/NavBar.vue';
import IsLogin from '~/IsLogin.vue';
import { ref } from 'vue';
const isLogin = ref(true);
</script>

<style lang="stylus" scoped>

</style>