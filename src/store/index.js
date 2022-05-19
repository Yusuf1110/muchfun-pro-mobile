import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '../utils/storage.js'

Vue.use(Vuex)
const TOKEN_KEY = 'USER_TOKEN'

export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem(TOKEN_KEY, data)
    }
  },
  actions: {},
  modules: {}
})
