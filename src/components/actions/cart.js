import { ADD_CART,UPDATE_CART_QTY } from "../constants/constants";


export const addCart = (item) => dispatch => {

    dispatch({
        type: ADD_CART,
        action: item
        
    })
}



export const updateCartQty = (id,qty) => dispatch => {
    dispatch({
        type: UPDATE_CART_QTY,
        action: {
            id,
            qty
        }
    })
}