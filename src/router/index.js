import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      keepAlive: true,
      index: 1
    },
    component: Home 
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      index: 1
    },
    component: () => import('@/views/Category/index.vue') // 路由懒加载
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      index: 1,
      isPass: true 
    },
    component: () => import('@/views/Cart/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      index: 1,
      isPass: true
    },
    component: () => import('@/views/User/index.vue')
  },
  {
    path: '/detail/:id', // 动态路由
    name: 'detail',
    meta: {
      index: 2
    },
    component: () => import('@/views/Detail/index.vue')
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      index: 2
    },
    component: () => import('@/views/Search/index.vue')
  },
  {
    path: '/level',
    name: 'level',
    meta: {
      index: 3
    },
    component: () => import('@/views/Search/level.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      index: 2
    },
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/other',
    name: 'other',
    meta: {
      index: 2
    },
    component: () => import('@/views/Other/index.vue')
  },
  {
    path: '/vip',
    name: 'vip',
    meta: {
      index: 2
    },
    component: () => import('@/views/Other/vip.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router