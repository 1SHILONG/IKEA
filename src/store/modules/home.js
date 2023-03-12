import {
	getSwiperList,
	getBannerList,
	getGoodsList
} from '@/service/home.js'
// import { closeToast, showLoadingToast } from "vant"; // 使用Toast组件

const state = {
	swiperList: [],
	bannerList: [],
	allGoods: [],
	leftGoods: [],
	rightGoods: [],
	goodsId: '',
	checkoutStatus: null
}

const mutations = {
	SET_SWIPERLIST: (state, val) => state.swiperList = val,
	SET_BANNERLIST: (state, val) => state.bannerList = val,
	SET_GOODSLIST: (state, val) => state.allGoods = val,
	SET_LEFTLIST: (state, val) => state.leftGoods = val,
	SET_RIGHTLIST: (state, val) => state.rightGoods = val,
	SET_GOODSID: (state, val) => state.goodsId = val,
}

const actions = {
	async GET_SWIPERLIST({ commit }) {
		if (state.swiperList.length > 0) return // 避免重复请求数据
		// showLoadingToast({
		// 	message: "加载中...",
		// 	forbidClick: true,
		// 	loadingType: "spinner",
		// });
		const { result } = await getSwiperList()
		// closeToast()
		commit('SET_SWIPERLIST', result)
	},
	async GET_BANNERLIST({ commit }) {
		if (state.bannerList.length > 0) return
		const { result } = await getBannerList()
		commit('SET_BANNERLIST', result)
	},
	async GET_GOODSLIST({ commit }) {
		const { result } = await getGoodsList()
		commit('SET_GOODSLIST', result)
	},
	async GET_GOODITEMLIST({ commit }) {
		let leftTempGoods = [],
				rightTempGoods = [];
		const heights = [0, 0];
		const getMinHeight = () => {
			let minHeight = Math.min(...heights);
			return heights.indexOf(minHeight)
		};
		for (let i = 0; i < state.allGoods.length; i++) {
			let minHeightIndex = getMinHeight()
			if (minHeightIndex === 0) {
				leftTempGoods.push(state.allGoods[i])
			} else {
				rightTempGoods.push(state.allGoods[i])
			}
			heights[minHeightIndex] += state.allGoods[i].height
		}
		commit('SET_LEFTLIST', leftTempGoods)
		commit('SET_RIGHTLIST', rightTempGoods)
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