import { showToast } from 'vant'
const state = {
  products: new Map(), // 无重复储存商品 做字典使用
  productItms: [] // 存储商品数据 引用式赋值 实时更新数据
}

const mutations = {
  SET_PRODUCTS: (state, val) => {
    // 重复添加
    if (state.products.has(val.iid)) {
      if (state.products.get(val.iid).inventory > 0) {
        val.inventory = val.inventory - val.count
        val.quantity = val.quantity + val.count
      } else {
        showToast('库存不足, 请选择其他商品')
      }
    } else {
      // 第一次添加
      state.products.set(val.iid, val)
      val.quantity = val.count
      val.inventory = val.inventory - val.quantity
      state.productItms.push(val)
    }
  },
  DETALE_PRODUCT: (state, val) => {
    state.productItms = state.productItms.filter(item => item.iid !== val)
  }
}

const actions = {
}

const getters = {
  // 筛选数据返回
  cartProducts: (state) => {
    return state.productItms.map(item => ({
      id: item.iid,
      title: item.title,
      price: `${item.price}.00`,
      desc: item.desc,
      imgSrc: item.imgSrc,
      quantity: item.quantity
    }));
  },
  totalProducts: (state) => {
    // 计算总价
    let totalPrice = state.productItms.reduce((pre, cru) => pre + cru.price * cru.quantity, 0) * 100
    // 计算总数
    let totalQuantity = state.productItms.reduce((pre, cru) => pre + cru.quantity, 0)
    totalQuantity > 0 ? totalQuantity : undefined
    return {
      totalPrice: totalPrice,
      totalQuantity: totalQuantity
    }
  },
  // 购物商品数组长度
  length: (state) => state.productItms.length
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}