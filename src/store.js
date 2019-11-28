import Vue from 'vue'
import Vuex from 'vuex'
import baseStore from './views/vuex/baseStore' //引入自定义baseStore插件
import baseStore2 from './views/vuex/baseAPI2'

Vue.use(Vuex)

//创建vuex实例
const store = new Vuex.Store({
  /** 
   * 1) 包含多个 module 
   * 2) 一个 module 是一个 store 的配置对象 
   * 3) 与一个组件(包含有共享数据)对应
   * 4) 谁来取值：组件:$store.state.module 名称.xxx
  */
  modules: {
    baseStore,
    baseStore2
  }
})

//暴露出vuex实例对象
export default store