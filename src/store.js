import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     username:'小杰',
     type:'意外'
  },
  mutations: {
    updateUsername(state,name){
      state.username=name;
    },
    updateType(state,value){
      state.type=value;
    }
  },
  actions: {

  }
})
