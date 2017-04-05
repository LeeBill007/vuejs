import types from './types'
import axios from 'axios'

export const state = {
  count: 20,
  dataList:[]
}
export const mutations = {
  [types.doAdd](state) {
    return state.count++
  },
  [types.doMinus](state){
    return state.count--
  },
  [types.dataList] (state) {
    axios.get('http://localhost:8080/static/data.json')
    .then((res) => {
      console.log(res.data);
      state.dataList = res.data
    }).catch((err) => console.log(err))
    return 
  }
}