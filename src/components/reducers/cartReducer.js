import { createReducer} from "@reduxjs/toolkit"
import { ADD_CART, LOAD_CART, INCREASE_CART_QTY,DECREASE_CART_QTY,UPDATE_CART_QTY,REMOVE_CART_ITEM, SIGN_OUT,LOAD_CART_INIT } from '../constants/constants'
import axios from "axios"
import { baseURL } from "../constants/constants"


const cartReducer = createReducer({}, (builder) => {

    builder
        .addCase(ADD_CART, (state, payload) => {
            const found = state.find(e => e.id === payload.action.id)
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

            if(found.qty === 1) {
                const filtered = state.filter(e => e.id !== payload.action) 
                return filtered
            }
           
            found.qty -= 1;
            return state
        })

        .addCase(UPDATE_CART_QTY, (state, payload) => {
            const found = state.find(e => e.id === payload.action.id)
            found.qty = payload.action.value;
            return state
        })


        .addCase(REMOVE_CART_ITEM, (state, payload) => {
            const filtered = state.filter(e => e.id !== payload.action) 
            return filtered
        })


        .addCase(SIGN_OUT, (state, payload) => {
            state = []
            return state
        })

        .addCase(LOAD_CART_INIT, (state, payload) => {
            state = payload.action
            return state
        })




})

export default cartReducer