import { configureStore } from "@reduxjs/toolkit";
import productReducers from '../reducers/productReducers'
import productBoxReducer from '../reducers/productBoxReducer'

const preloadedState = {
    products: [],
    productBox: [],
}


export const store = configureStore({
    preloadedState,
    reducer: {
        products:productReducers,
        productBox: productBoxReducer,
    },

})