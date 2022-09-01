import { REGISTER_USER,LOGIN_USER, RELOAD_USER,SIGN_OUT } from "../constants/constants";
import { createReducer } from "@reduxjs/toolkit";


const user = createReducer({}, builder => {

    builder
        .addCase(REGISTER_USER ,(state, payload) => {

            const {headers,status,action} = payload;
            state = {headers,status,action}
            return state;
           
        })
        .addCase(LOGIN_USER,(state, payload) => {

            const {headers,status,action} = payload;
            state = {headers,status,action}
            return state;
           
        })
        .addCase(RELOAD_USER,(state, payload) => {
            const {headers,status,action} = payload;
            state = {headers,status,action}
            return state;
        })
        .addCase(SIGN_OUT,(state, payload) => {
            state = {}
            return state;
        })

})

export default user;