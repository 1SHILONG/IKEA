import axios from "./config.js";

// 分类页数据请求
export const getCategoryData = () => {
  return axios.get('/categoryData')
}
