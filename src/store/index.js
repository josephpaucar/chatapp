import { createStore } from "vuex";
import profile from '@/store/modules/profile'
import { COMMIT_SET_STATUS } from '@/common/mutation-types'

const store = createStore({
  state() {
    return {
      status: null
    }
  },
  getters: {
    // firstName(state, rootState) {
    //   return rootState.profile.username.split('.')[0]
    // }
  },
  mutations: {
    // setStatus(state, value) {
    [COMMIT_SET_STATUS](state, value) {
      state.status = value
    }
  },
  actions: {},
  modules: {
    profile
  }
});

export default store;