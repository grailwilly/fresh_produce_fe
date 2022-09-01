import { ADD_CART,UPDATE_CART_QTY,DECREASE_CART_QTY,INCREASE_CART_QTY } from "../constants/constants";


export const addCart = (item) => dispatch => {

    dispatch({
        type: ADD_CART,
        action: item
        
    })
}


export const increaseCartQty = (id) => dispatch => {

    dispatch({
        type: INCREASE_CART_QTY,
        action: id
    })
}
export const decreaseCartQty = (id) => dispatch => {

    dispatch({
        type: DECREASE_CART_QTY,
        action: id
    })
}
export const updateCartQty = (value,id) => dispatch => {

    dispatch({
        type: UPDATE_CART_QTY,
        action: {value,id}
    })
}