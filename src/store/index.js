import { createStore } from "vuex"; //中央状态仓库,  单一状态树
import home from './modules/home'


export default createStore({
    modules:{ // 仓库里的状态比较多的话?  模块化的存储
        home,
    }
})
