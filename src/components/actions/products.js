
import {LOAD_PRODUCTS} from '../constants/constants'
import axios from 'axios'
import { baseURL } from '../constants/constants'

const products = () => async dispatch => {

        try {
           const res = await axios.get(`${baseURL}v1/products/`)
           if(res) {
            dispatch({
                type:LOAD_PRODUCTS,
                action: res.data
            })
           }
        } catch (err) {
            console.error(err.message)
        }
}

export default products