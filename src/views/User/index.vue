<template>
  <div v-if="true">
  <IsLogin />
  </div>
  <div v-else>
    user
  </div>
  <NavBar/>
</template>

<script setup>
import NavBar from '~/NavBar.vue';
import IsLogin from '~/IsLogin.vue';
</script>

<style lang="stylus" scoped>

</style>