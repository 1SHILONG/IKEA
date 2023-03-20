import {
	getDetailData
} from '@/service/detail.js'

const state = {
  swiperList:[],
  description: {},
	particular: ''
}

const mutations = {
  SET_SWIPERLIST: (state, val) => state.swiperList = val,
  SET_DESCRIPTION: (state, val) => state.description = val,
  SET_PARTICULAR: (state, val) => state.particular = val,
}

const actions = {
	  async GET_DETAILDATA({ commit }, id) {
		const { result } = await getDetailData(id)
		commit('SET_SWIPERLIST', result.swipeImgUrls)
		commit('SET_DESCRIPTION', result.description)
		commit('SET_PARTICULAR', result.particular)
	},
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