import { configureStore } from "@reduxjs/toolkit";
import productReducers from '../reducers/productReducers'
import productBoxReducer from '../reducers/productBoxReducer'
import cartReducer from '../reducers/cartReducer'
import registerReducer from "../reducers/registerReducer";


const preloadedState = {
    products: [],
    productBox: [],
    cart:[],
    user:{}
    
}


export const store = configureStore({
    preloadedState,
    reducer: {
        products:productReducers,
        productBox: productBoxReducer,
        cart: cartReducer,
        user: registerReducer
    },

})