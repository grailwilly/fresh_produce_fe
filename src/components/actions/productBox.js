
import { SET_BOX_DATA, INCREASE_QUANTITY, DECREASE_QUANTITY,UPDATE_QTY } from '../constants/constants'

export const productBox = (productData) => dispatch => {

    dispatch({
        type: SET_BOX_DATA,
        action: productData
    })
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