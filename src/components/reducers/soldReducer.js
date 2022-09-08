
import { createReducer } from "@reduxjs/toolkit";
import { MY_SOLD } from "../constants/constants";



const sold = createReducer({}, builder => {

    builder
        .addCase(MY_SOLD, (state,payload) => {

            console.log(payload.action)
            state = payload.action
            return state;
        })
       

})

export default sold;