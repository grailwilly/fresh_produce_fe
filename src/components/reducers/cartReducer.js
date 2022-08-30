import { createReducer } from "@reduxjs/toolkit"
import {ADD_CART} from '../constants/constants'



const cartReducer = createReducer ({}, (builder) => {
    builder
    .addCase(ADD_CART, (state,payload) => {
        console.log('test')
        state.push(1)
        return state
    })
  
})

export default cartReducer