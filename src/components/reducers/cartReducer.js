import { createReducer } from "@reduxjs/toolkit"
import {ADD_CART, LOAD_CART} from '../constants/constants'




const cartReducer = createReducer ({}, (builder) => {
    builder
    .addCase(ADD_CART, (state,payload) => {
        state.push(payload.action)
        return state
    })

    .addCase(LOAD_CART, (state,payload) => {
        console.log(payload.action)
        state = payload.action
        return state
    })
  
})

export default cartReducer