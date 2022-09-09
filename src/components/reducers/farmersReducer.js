import { createReducer } from "@reduxjs/toolkit";
import { GET_ALL_FARMERS } from "../constants/constants";




const orders = createReducer({}, builder => {

    builder
        .addCase(GET_ALL_FARMERS ,(state, payload) => {
            state = payload.action
            return state
        })
       
})

export default orders;