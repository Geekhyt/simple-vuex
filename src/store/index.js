import Vue from 'vue'
import Vuex from '../vuex/index'
// import Vuex from 'vuex'

Vue.use(Vuex) // 默认会执行当前插件的install方法

// 通过vuex中的一个属性 Store 创建一个Store实例
export default new Vuex.Store({
  state: { // 单一数据源
    age: 10
  },
  getters: { // computed
    myAge(state) { // 以前用vue中的计算属性
      return state.age + 20
    }
  },
  // 更新状态的唯一方式就是通过mutations
  mutations: { // mutation更改状态只能采用同步(严格模式下) method
    // payload 载荷
    syncChange(state, payload) { // 修改状态的方法 同步的更改
      state.age += payload;
    }
  },
  actions: {
    asyncChange({commit}, payload) {
      setTimeout(() => {
        commit('syncChange', payload);
      }, 1000);
    }
  },
  modules: {
    a: {
      state: {
        age: 'a100'
      },
      mutations: {
        syncChange() {
          console.log('a-syncChange')
        }
      }
    },
    b: {
      state: {
        age: 'b100'
      },
      mutations: {
        syncChange() {
          console.log('b-syncChange')
        }
      },
      modules: {
        c: {
          state: {
            age: 'c100'
          },
          mutations: {
            syncChange() {
              console.log('c-syncChange')
            }
          }
        }
      }
    }
  }
})
