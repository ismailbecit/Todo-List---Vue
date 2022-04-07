import { createStore } from "vuex"
import Counter from "./models/couter"
export const store = createStore({

    state: {

    },
    modules: {
        counter: Counter
    },
})

