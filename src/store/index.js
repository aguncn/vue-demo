import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	vuex_count: 0
  },
  mutations: {
	mutationsAddCount(state, n = 0) {
	  return (state.vuex_count += n)
	},
	mutationsReduceCount(state, n = 0) {
	  return (state.vuex_count -= n)
	}
  },
  actions: {
    actionsAddCount(context, n = 0) {
	  console.log(context)
	  return context.commit('mutationsAddCount', n)
	},
	actionsReduceCount(context, n = 0) {
	  return context.commit('mutationsReduceCount', n)
	}
  },
  // 我们一般使用getters来获取我们的state，因为它算是state的一个计算属性
  getters: {
    getterCount(state, n = 0) {
      return (state.vuex_count += n)
    }
  },
  modules: {
  }
})
