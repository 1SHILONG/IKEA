
const state = {
	isLogin: false // 判断是否登录
}

const mutations = {
  SET_LOGIN: (state, val) => state.isLogin = val
}

const actions = {
	
}

const getters = {
}

export default {
	namespaced: true,
	state,
	mutations,
	getters,
	actions
}