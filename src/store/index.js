import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    status: '上線',
    username: '會員您好'

}
const getters = {}
const actions = {}
const mutations = {}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})