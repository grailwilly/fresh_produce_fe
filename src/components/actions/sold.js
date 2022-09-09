import { baseURL } from "../constants/constants"
import axios from "axios"
import { MY_SOLD } from "../constants/constants"


export const getMySold = (headers) => async dispatch => {

    const url = `${baseURL}v1/sold`
    const productsUrl = `${baseURL}v1/products`
 

    try {
        const productRes = await axios({
            method:'get',
            url:productsUrl,
        })

        

        const res = await axios({
            method:'get',
            url,
            headers
        })

        const formatted = res.data.map(e => {
            const found = productRes.data.find(el => el.id === e.product_id)

            return {
                ...e,
                image:found.image,
                name:found.name
            }
        })
        
        dispatch({
            type:MY_SOLD,
            action: formatted
        })

    } catch (err) {
        console.error(err.message)
    }



}