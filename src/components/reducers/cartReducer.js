import { createReducer,current} from "@reduxjs/toolkit"
import { ADD_CART, LOAD_CART, INCREASE_CART_QTY,DECREASE_CART_QTY,UPDATE_CART_QTY } from '../constants/constants'




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


        .addCase(INCREASE_CART_QTY, (state, payload) => {
            const found = state.find(e => e.id === payload.action)
            found.qty += 1;
            return state
        })
        .addCase(DECREASE_CART_QTY, (state, payload) => {
            const found = state.find(e => e.id === payload.action)
            found.qty -= 1;
            return state
        })

        .addCase(UPDATE_CART_QTY, (state, payload) => {
            const found = state.find(e => e.id === payload.action.id)
            found.qty = payload.action.value;
            return state
        })

})

export default cartReducer