
const state = {
	islogin: false,
	checkoutStatus: null
}

const mutations = {
  SET_LOGIN: (state, val) => state.islogin = val, 
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