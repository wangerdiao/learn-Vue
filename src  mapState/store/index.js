//该文件用于创建Vuex中最为核心的store
import Vuex from 'vuex' //引入Vuex
import Vue from 'vue'
Vue.use(Vuex)
const actions = {
    // jia(context,value) {
    //     context.commit('JIA',value)
    // },
    // jian(context,value) {
    //     context.commit('JIAN',value)
    // },  //没有什么逻辑直接转发commit 可以直接跳到commit
    jiaOdd(context,value) {
        if(context.state.sum%2) {
            console.log(context,value)
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value) {
        setTimeout(() => {
            context.commit('JIA',value)
        },500)
    },
} //准备actions-用于响应组件中的动作
const mutations = {
    JIA(state,value) {
        state.sum += value
    },
    JIAN(state,value) {
        state.sum -= value
    }
} //准备mutations-用于操作数据
const state ={
    sum:0,
    school:'尚硅谷',
    subject:'前端'
} //准备state-用于存储数据
const getters = {
    bigSum(state) {
        return state.sum*10
    }
}
//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations:mutations,
    state:state,
    getters
})
