import axios from "./config.js";
// 轮播图数据请求
const getSwiperList = () => {
  return axios.get('/swiperList')
}
// 横幅滑动数据请求
const getBannerList = () => {
  return axios.get('/bannerList')
}
// 商品数据请求 分页处理数据 需要传参数page
const getGoodsList = (page) => {
  return axios.get('/goodsList',{params: { page: page}})
}

export { 
  getSwiperList,
  getBannerList,
  getGoodsList
 }