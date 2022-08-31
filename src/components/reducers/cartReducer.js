import { createReducer } from "@reduxjs/toolkit"
import { ADD_CART, LOAD_CART, UPDATE_CART_QTY } from '../constants/constants'




const cartReducer = createReducer({}, (builder) => {
    builder
        .addCase(ADD_CART, (state, payload) => {

            const found = state.find(e => e.id == payload.action.id)
            if (found) {
                found.qty += payload.action.qty
            } else {
                state.push(payload.action)
            }
            return state
        })

        .addCase(LOAD_CART, (state, payload) => {
            console.log(payload.action)
            state = payload.action
            return state
        })

        .addCase(UPDATE_CART_QTY, (state, payload) => {
            console.log(state)
            return state
        })

})

export default cartReducer