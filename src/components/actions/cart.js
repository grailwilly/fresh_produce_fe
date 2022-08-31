import { ADD_CART,LOAD_CART } from "../constants/constants";


export const addCart = (item) => dispatch => {

    dispatch({
        type: ADD_CART,
        action: item
        
    })
}
