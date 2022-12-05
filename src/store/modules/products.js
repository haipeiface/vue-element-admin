import { getProducts } from '@/api/product'

const state = {
  // 记录所有商品
  products: []
}
const getters = {}

const mutations = {
  // 给products赋值
  setProducts(state, payLoad) {
    state.products = payLoad
  }

}
const actions = {
  // 异步获取商品，第一个是context上下文，解构出来要commit
  async getProducts({ commit }) {
    // 请求接口
    const { data } = await getProducts()
    // 将获取的数据将结果存储到state中
    commit('setProducts', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
