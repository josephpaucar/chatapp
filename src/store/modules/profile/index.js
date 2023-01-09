import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/mutation-types'
import { getUser } from '@/api'

const module = {
  namespaced: true,
  state() {
    return {
      username: 'Joseph.Paucar'
    }
  },
  getters: {
    firstName(state) {
      return state.username.split('.')[0]
    }
  },
  mutations: {
    //updateUsername(state, username) {
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username
    }
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      console.log('update username action!', state.username, username)

      const user = await getUser(1)
      console.log(user)
      // commit('updateUsername', user.username)
      commit(COMMIT_UPDATE_USERNAME, user.username)

      if(state.username) {
        // commit('session/setStatus', 'active', { root: true }) // si el modulo no es raiz se puede usar nombreModulo/setVariable
        // commit('setStatus', 'active', { root: true })
        commit(COMMIT_SET_STATUS, 'active', { root: true })
        console.log('status', rootState.status)
      }
    }
  },
}

export default module;