import Mock from 'mockjs'
import swiperList from './data/swiperList.js'
import bannerList from './data/bannerList.js'
import goodsList from './data/goodsList.js'


// - 假接口满足什么? 数据 url
Mock.setup({
    timeout: '50-1000' // 随机的延迟时间, 模式请求耗时
})

// 轮播图 url /swiperList
Mock.mock(/\/swiperList/, 'get', () => {
    return {
      code: 0,
      result: swiperList
    }
})
Mock.mock(/\/bannerList/, 'get', () => {
  return {
    code: 0,
    result: bannerList
  }
})
Mock.mock(/\/goodsList/, 'get', () => {
  return {
    code: 0,
    result: goodsList
  }
})


