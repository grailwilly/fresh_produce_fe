
import { SET_BOX_DATA, INCREASE_QUANTITY, DECREASE_QUANTITY,UPDATE_QTY,LOAD_PRODUCTS } from '../constants/constants'
import axios from 'axios'
import { baseURL } from '../constants/constants'


export const productBox = () => async dispatch => {
    
    
    const url = `${baseURL}/v1/products/`

    try {

        const res = await axios.get(url)

        dispatch({
            type: SET_BOX_DATA,
            action: res.data
        })

        dispatch({
            type: LOAD_PRODUCTS,
            action: res.data
        })
        
    } catch (error) {
        
    }

   
}

export const increaseQty = (id) => dispatch => {
    dispatch({
        type: INCREASE_QUANTITY,
        action: id
    })
}
export const decreaseQty = (id) => dispatch => {

    dispatch({
        type: DECREASE_QUANTITY,
        action: id
    })
}
export const updateQty = (value,id) => dispatch => {

    dispatch({
        type: UPDATE_QTY,
        action: {value,id}
    })
}