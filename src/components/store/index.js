import { configureStore } from "@reduxjs/toolkit";
import productReducers from '../reducers/productReducers'
import productBoxReducer from '../reducers/productBoxReducer'
import cartReducer from '../reducers/cartReducer'
import userReducer from "../reducers/userReducer";


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
        user: userReducer
    },

})