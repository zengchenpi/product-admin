import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     username:'小杰',
     data:[],
  },
  mutations: {
    updateUsername(state,name){
      state.username=name;
    },
    updateData(state,data){
      state.data.push(data);
    }
  },
  actions: {

  }
})
