import { configureStore } from "@reduxjs/toolkit";
import productReducers from '../reducers/productReducers'
import productBoxReducer from '../reducers/productBoxReducer'
import cartReducer from '../reducers/cartReducer'
import userReducer from "../reducers/userReducer";
import soldReducer from "../reducers/soldReducer";
import ordersReducer from "../reducers/ordersReducer";
import farmersReducer from '../reducers/farmersReducer'


const preloadedState = {
    products: [],
    productBox: [],
    cart:[],
    user:{},
    sold:[],
    
    orders:[],
    farmers:[],

}


export const store = configureStore({
    preloadedState,
    reducer: {
        products:productReducers,
        productBox: productBoxReducer,
        cart: cartReducer,
        user: userReducer,
        sold: soldReducer,
        orders: ordersReducer,
        farmers: farmersReducer,
    },

})