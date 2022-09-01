import { configureStore } from "@reduxjs/toolkit";
import productReducers from '../reducers/productReducers'
import productBoxReducer from '../reducers/productBoxReducer'
import cartReducer from '../reducers/cartReducer'


const preloadedState = {
    products: [],
    productBox: [],
    cart:[]
    
}


export const store = configureStore({
    preloadedState,
    reducer: {
        products:productReducers,
        productBox: productBoxReducer,
        cart: cartReducer,
    },

})