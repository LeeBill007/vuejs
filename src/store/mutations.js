import types from './types'

export const state = {
  count: 20
}
export const mutations = {
  [types.doAdd](state) {
    return state.count++
  },
  [types.doMinus](state){
    return state.count--
  }
}