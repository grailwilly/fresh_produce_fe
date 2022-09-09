import { MY_ORDERS,PAY_NOW,SIGN_OUT} from "../constants/constants";
import { createReducer } from "@reduxjs/toolkit";




const orders = createReducer({}, builder => {

    builder
        .addCase(MY_ORDERS ,(state, payload) => {
            state = payload.action
            return state
        })
        
        .addCase(PAY_NOW, (state,payload) => {
            const id = payload.action.id
            const found = state.find(e => e.id === id)
            found.status = 'paid'
            return state;
        })

        .addCase(SIGN_OUT,(state, payload) => {
            state = {}
            return state;
        })

     

})

export default orders;