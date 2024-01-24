import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'

const state = {
  token: getToken() // 从缓存中读取初始的token
}
const mutations = {
  setToken(state, token) {
    state.token = token
    // 同步到缓存中
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }

}
const actions = {
  // context上下文,传入参数
  async login(context, data) {
    console.log(data)
    // todo： 调用登录接口
    const token = await login(data)
    context.commit('setToken', token)
  }
}
export default {
  namespace: true,
  state,
  mutations,
  actions
}
