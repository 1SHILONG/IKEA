import axios from "./config.js";

const getSwiperList = () => {
  return axios.get('/swiperList')
}

const getBannerList = () => {
  return axios.get('/bannerList')
}

const getGoodsList = () => {
  return axios.get('/goodsList')
}


export { 
  getSwiperList,
  getBannerList,
  getGoodsList
 }