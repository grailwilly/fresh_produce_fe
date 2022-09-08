import { ADD_CART, UPDATE_CART_QTY, DECREASE_CART_QTY, INCREASE_CART_QTY, REMOVE_CART_ITEM, LOAD_CART_INIT } from "../constants/constants";
import axios from "axios";
import { baseURL } from "../constants/constants";



export const addCart = (item, headers) => async dispatch => {


     try {

        const cartData = {
            qty: item.qty,
            user_id: item.user_id,
            product_id: item.id
        }

        const url = `${baseURL}v1/cart`

       const resData =  await axios({
            method: 'post',
            url,
            headers,
            data: cartData

        })


        const formattedProducts = {
            ...item,
            id:resData.data,
            seller_id:item.user_id,
            product_id:item.id
        }


        dispatch({
            type: ADD_CART,
            action: formattedProducts
        })

    } catch (err) {
        console.error(err.message)

    }
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


export const removeCartItem = (id, headers) => async dispatch => {


    try {

        const url = `${baseURL}v1/cart/${id}`

        await axios({
            method:'delete',
            url,
            headers
        })

        dispatch({
            type: REMOVE_CART_ITEM,
            action: id
        })

    } catch (err) {
        console.error(err.message)

    }
}


export const loadCartItems = (user) => async dispatch => {

    const headers = user
    const productsUrl = `${baseURL}v1/products`
    const cartUrl = `${baseURL}v1/cart`

    try {
        const productsReq = await axios({
            method: 'get',
            url: productsUrl,
        })

        const cartRes = await axios({
            method: 'get',
            headers,
            url: cartUrl
        })

        const formattedProducts = cartRes.data.map(e => {
            const found = productsReq.data.find(el => el.id === e.product_id)
            return {
                ...found,
                ...e,
                seller_id:found.user_id
            }

        })

        dispatch({
            type: LOAD_CART_INIT,
            action: formattedProducts
        })

    } catch (err) {

        console.error(err.message)

    }
}