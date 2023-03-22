import axios from "./config.js";
// 轮播图数据请求
const getSwiperList = () => {
  return axios.get('/swiperList')
}
// 横幅滑动数据请求
const getBannerList = () => {
  return axios.get('/bannerList')
}
// 商品数据请求
const getGoodsList = () => {
  return axios.get('/goodsList')
}


export { 
  getSwiperList,
  getBannerList,
  getGoodsList
 }