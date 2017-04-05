import types from './types'

export default {
  [types.doAdd](commit) {
    commit(types.doAdd)
  },
  [types.doMinus]({commit}){
    commit(types.doMinus)
  },
  [types.dataList]({commit}) {
    commit(types.dataList)
  }
}


