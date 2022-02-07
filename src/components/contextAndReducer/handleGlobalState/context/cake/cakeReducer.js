import { BUY_CAKE } from "./cakeType"

export const cakeInitState = {
    num: 10
}

export const cakeReducer = (state, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                num: state.num - action.payload
            }
        default:
            return state
    }
}