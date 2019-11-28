import {INCREMENT2,DECREMENT2} from './types'

export default {
    [INCREMENT2] (state) {
        state.count2++
    },
    [DECREMENT2] (state) {
        state.count2--
    }
}