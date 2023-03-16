import {
	getDetailData
} from '@/service/detail.js'

const state = {
  swiperList:[],
  description: {}
}

const mutations = {
  SET_SWIPERLIST: (state, val) => state.swiperList = val,
  SET_DESCRIPTION: (state, val) => state.description = val,
}

const actions = {
	  async GET_DETAILDATA({ commit }, id) {
		const { result } = await getDetailData(id)
		commit('SET_SWIPERLIST', result.swipeImgUrls)
		commit('SET_DESCRIPTION', result.description)
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