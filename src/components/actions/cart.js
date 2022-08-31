import { ADD_CART } from "../constants/constants";
import axios from "axios";
import { baseURL } from "../constants/constants";

export const addCart = (item) => dispatch => {

    dispatch({
        type: ADD_CART,
        action: item
        
    })
}


export const loadCart = (cartItems) => async dispatch => {


    try {

    const url = `${baseURL}/v1/products/`
    const res = await axios.get(url)
        
    if(res) {

       const items = cartItems.map(e => {
            return {
                qty: e.qty,
                product_id : e.id,
                name: res.data.find(el => el.id === e.id).name,
            }

        })

        console.log(items)
     
    }
        
    } catch (error) {
        
    }

}