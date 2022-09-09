
import { createReducer } from "@reduxjs/toolkit";
import { MY_SOLD,SIGN_OUT } from "../constants/constants";



const sold = createReducer({}, builder => {

    builder
        .addCase(MY_SOLD, (state,payload) => {

            console.log(payload.action)
            state = payload.action
            return state;
        })

        .addCase(SIGN_OUT,(state, payload) => {
            state = {}
            return state;
        })
       

})

export default sold;