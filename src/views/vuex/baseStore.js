const baseStore = {
    /** 
     * 1) vuex管理的状态对象
     * 2) 它应该是唯一的 
     * 3) 谁来读取：组件中:$store.state.xxx
     * 4) 类似于data
    */
    state: {
        count: 0, //初始化数据状态
    },
    /** 
     * 1) 包含多个计算属性(get)的方法
     * 2) 谁来读取: 组件中:$store.getters.xxx
    */
    getters: {
        oddOrEven(state) {
            return state.count%2 === 0 ? '偶数' : '奇数'
        },
        count(state) {
            return state.count
        }
    },
    /** 
     * 1) 包含多个直接更新 state 的方法(回调函数)的对象 
     * 2) 只能包含同步的代码, 不能写异步代码 
     * 3) 唯一改变state状态的地方，直接更改
     * 4) 谁来触发: 组件中:this.$store.commit('mutation 名称',data1)
    */
    mutations: {
        INCREMENT(state) {
            state.count++
        },
        DECREMENT(state) {
            state.count--
        }
    },
    /** 
     * 1) 包含多个事件回调函数的对象 
     * 2) 通过执行:commit()来触发 mutation 的调用, 间接更新 state 
     * 3) 包含异步代码(定时器,ajax)和逻辑代码
     * 4) 谁来触发: 组件中:$store.dispatch('action 名称',data1) 
    */
    actions: {
        increment({commit}) {
            commit('INCREMENT')
        },
        decrement({commit}) {
            commit('DECREMENT')
        },
        incrementIfOdd({commit, state}) {
            if(state.count%2 === 1) {
                commit('INCREMENT')
            }
        },
        incrementAsync({commit}) {
            setTimeout(() => {
                commit('INCREMENT')
            },2000)
        }
    }
}

export default baseStore