import { baseURL } from "../constants/constants"
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