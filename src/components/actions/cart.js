import { ADD_CART, UPDATE_CART_QTY, DECREASE_CART_QTY, INCREASE_CART_QTY, REMOVE_CART_ITEM, LOAD_CART_INIT } from "../constants/constants";
import axios from "axios";
import { baseURL } from "../constants/constants";

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
export const updateCartQty = (value, id) => dispatch => {

    dispatch({
        type: UPDATE_CART_QTY,
        action: { value, id }
    })
}

export const removeCartItem = (id) => dispatch => {
    dispatch({
        type: REMOVE_CART_ITEM,
        action: id
    })
}


export const loadCartItems = (user) => async dispatch => {


    const headers = user
    const productsUrl = `${baseURL}v1/products`
    const cartUrl = `${baseURL}v1/cart`



    try {
        const productsReq = await axios({
            method: 'get',
            url:productsUrl,
        })

        const cartRes = await axios({
            method: 'get',
            headers,
            url:cartUrl
        })

        const test = cartRes.data.map(e => {
            const found = productsReq.data.find(el => el.id === e.id)
            return {
                ...found,
                ...e
            }
        })

        dispatch({
            type: LOAD_CART_INIT,
            action: test
        })

    } catch (err) {

        console.error(err.message)

    }
}