import {
	getCategoryData
} from '@/service/category.js'

const state = {
  hotWords: [],
	firstList: [],
	secondList: []
}

const mutations = {
  SET_HOTWORDS: (state, val) => state.hotWords = val,
  SET_FIRSTLIST: (state, val) => state.firstList = val,
  SET_SECONDLIST: (state, val) => state.secondList = val
}

const actions = {
	async GET_CATEGORY({ commit }) {
		const { result } = await getCategoryData()
		commit('SET_HOTWORDS', result.hotWords)
		commit('SET_FIRSTLIST', result.firstList)
		commit('SET_SECONDLIST', result.secondList)
  }
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