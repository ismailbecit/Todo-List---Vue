
export default {
    namespaced: true,
    state: {
        count: 1
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    getters: {
        showCounter(state) {
            return state.count
        }
    }
}