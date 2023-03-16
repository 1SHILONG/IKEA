import axios from 'axios'

// axios.defaults.baseURL = 'https://www.fastmock.site/mock/0a6c301b03c11f31fd61a5e2a6442b22/ikea'
// 本项目使用Mockjs模拟数据 也可使用fastmock模拟数据

// 响应拦截
// 结果后， 最外层data 自动脱落
// 一次配置， 不用在data.data
axios.interceptors.response.use((res) => {
    return res.data
})

export default axios