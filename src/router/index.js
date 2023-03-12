import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      index: 1
    },
    component: import('@/views/home/index.vue') // 路由懒加载
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      index: 1
    },
    component: () => import('@/views/Category/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      index: 1,
      isLogin: true
    },
    component: () => import('@/views/Cart/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      index: 1,
      isLogin: true
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
    component: () => import('@/views/Search/index.vue')
  },
  {
    path: '/level',
    name: 'level',
    component: () => import('@/views/Search/level.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router