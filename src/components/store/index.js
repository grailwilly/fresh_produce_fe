import { configureStore } from "@reduxjs/toolkit";
import productReducers from '../reducers/productReducers'

const preloadedState = {
    products: [],
}


export const store = configureStore({
    preloadedState,
    reducer: {
        products:productReducers
    },

})