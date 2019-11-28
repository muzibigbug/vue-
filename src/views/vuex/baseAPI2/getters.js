export default {
    oddOrEven2(state) {
        return state.count2%2 === 0 ? '偶数' : '奇数'
    },
    count2(state) {
        return state.count2
    }
}