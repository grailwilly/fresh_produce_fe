import { baseURL,MY_ORDERS } from "../constants/constants"
import axios from "axios"


export const completeOrder = (or, headers) => async dispatch => {

    const url = `${baseURL}v1/orders`


    const orders = or.map(o => {
        return {
            ...o,
            total: o.price * o.qty
        }
    })

    try {

    
        const res = await axios({
            method: 'post',
            url,
            data: {orders: orders},
            headers
        })

    } catch (err) {
        console.error(err.message)

    }

}


export const myOrders = (headers) => async dispatch => {

    const productUrl = `${baseURL}v1/products`
    const farmersUrl  = `${baseURL}v1/farmers`

    if(!headers) {
        return
    }

    const url = `${baseURL}v1/orders`

    try {

        const products = await axios({
            method:'get',
            url:productUrl
        })

        const farmers = await axios({
            method:'get',
            url:farmersUrl
        })


        const res = await axios({
            method:'get',
            url,
            headers
        })
        const orderedItems = []

        res.data.forEach(e => {
            e.ordered_items.forEach(el => {
                orderedItems.push(el)
            })
        })

        const formatted = orderedItems.map(e => {
            const found = products.data.find(el => el.id === e.product_id)
            const farmerFound = farmers.data.find(o => o.id === e.seller_id)
     
            return {
                ...e,
                image: found.image,
                farmer: `${farmerFound.first_name} ${farmerFound.last_name}`
            }
        })

        dispatch({
            type: MY_ORDERS,
            action: formatted
        })

    } catch (err) {
        console.error(err.message)
    }

}