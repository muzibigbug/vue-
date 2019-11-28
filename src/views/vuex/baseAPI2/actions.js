import {INCREMENT2,DECREMENT2} from './types'

export default {
    increment2({commit}) {
        commit(INCREMENT2)
    },
    decrement2({commit}) {
        commit(DECREMENT2)
    },
    incrementIfOdd2({commit, state}) {
        if(state.count2%2 === 1) {
            commit(INCREMENT2)
        }
    },
    incrementAsync2({commit}) {
        setTimeout(() => {
            commit(INCREMENT2)
        },2000)
    }
}