import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    login:false,
    user:{

    }
  },
  mutations: {
    setLogin(state){
      state.login = true
    },
    setLogout(state){
      state.login = false
    },
    setUser(state,user){
      state.user = user
    }
  },
  plugins:[createPersistedState()]

})