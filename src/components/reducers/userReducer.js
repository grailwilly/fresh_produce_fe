import { REGISTER_USER } from "../constants/constants";
import { createReducer } from "@reduxjs/toolkit";


const user = createReducer({}, builder => {

    builder
        .addCase(REGISTER_USER,(state, payload) => {

            const {headers,status,action} = payload;
            state = {headers,status,action}
            return state;
           
        })

})

export default user;