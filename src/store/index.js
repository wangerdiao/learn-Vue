//该文件用于创建Vuex中最为核心的store
import Vuex from 'vuex' //引入Vuex
import Vue from 'vue'
Vue.use(Vuex)

const countOptions = {
    namespaced:true,
    actions:{
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
    },
    mutations:{
        JIA(state,value) {
            state.sum += value
        },
        JIAN(state,value) {
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state) {
            return state.sum*10
        }
    }
}
const personsOptions = {
    namespaced:true,
    actions:{
        addWang(context,value) {
            if(value.name.indexOf('王')===0) {
                context.commit('addPerson',value)
            }else{
                alert('姓名要为王')
            }
        }
    },
    mutations:{
        addPerson(state,value) {
            console.log('addPerson调用了',value)
            state.persons.unshift(value)
            console.log(state)
        }
    },
    state:{
        persons:[{id:'001',name:'张三'}]
    },
    getters:{
        firstName(state) {
            return state.persons[0].name
        }
    }
}
//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personsOptions
    }
})
