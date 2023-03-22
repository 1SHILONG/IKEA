import axios from "./config.js";

// 详情页数据请求
export const getDetailData = (id) => {
  return axios.get('/detailData', {params: { id: id}}) // 请求数据时传递id参数
}
