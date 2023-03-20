import { createStore } from "vuex"; //中央状态仓库,  单一状态树
import home from './modules/home' // 子仓库
import login from './modules/login'
import detail from './modules/detail'
import cart from './modules/cart'
import category from './modules/category'



export default createStore({
    modules:{ // 模块化存储
        home,
        login,
        detail,
        cart,
        category
    }
})
