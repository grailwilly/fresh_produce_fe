import { MY_ORDERS } from "../constants/constants";
import { createReducer } from "@reduxjs/toolkit";


const orders = createReducer({}, builder => {

    builder
        .addCase(MY_ORDERS ,(state, payload) => {
            state = payload.action
            return state
        })

})

export default orders;