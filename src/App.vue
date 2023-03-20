<script setup>
import { reactive } from 'vue';
import { getLocal, TOKEN } from './common/js/utils'
import { useRouter } from 'vue-router'; // hooks
import { useStore } from 'vuex';
const state = reactive({
  transitionName: 'slide-left'
})
const store = useStore()
const router = useRouter()
// 路由守卫  生命周期
router.beforeEach((to, from, next) => {
  if (to.meta.isPass && getLocal(TOKEN)) { // 需要登录权限才能访问
      store.state.login.isLogin = true
      next()
  }
    next()
  if (to.meta.index > from.meta.index) {
    // 从主页面 去到子页面
    state.transitionName = 'slide-left'
  } else if (to.meta.index < from.meta.index) {
    // 子页面回到主页面
    state.transitionName = 'slide-right'
  } else {
    // 平级
    state.transitionName = ''
  }
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition :name="state.transitionName">
      <keep-alive> 
        <component :is='Component' :key="$route.name" v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
  </router-view>
  <router-view v-slot="{ Component }">
    <transition :name="state.transitionName">
      <component :is='Component' :key="$route.name" v-if="!$route.meta.keepAlive" />
    </transition>
  </router-view>
</template>

<style lang="stylus">
.slide-left-enter-active, 
.slide-left-leave-active, 
.slide-right-enter-active, 
.slide-right-leave-active
  height 100%
  /* 提前告知浏览器， 即将会有transform 渐变 */
  will-change transform
  transition all 600ms
  position absolute
  backface-visibility hidden 
.slide-right-enter-from 
  opacity 0
  transform translate3d(-100%, 0, 0)
.slide-right-leave-active 
  opacity 0
  transform translate3d(100%, 0, 0) 
.slide-left-enter-from 
  opacity 0
  transform translate3d(100%, 0, 0)
.slide-left-leave-active 
  opacity 0
  transform translate3d(-100%, 0, 0)
</style>
