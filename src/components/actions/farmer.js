
import axios from "axios"
import { baseURL } from "../constants/constants"
import { GET_ALL_FARMERS } from "../constants/constants"


export const getAllFarmers = () => async dispatch => {

    const url = `${baseURL}v1/farmers`

    try {

        const res = await axios({
            method:'get',
            url,

        }) 
        
        dispatch({
            type:GET_ALL_FARMERS,
            action: res.data
        })


    } catch (err) {
        console.error(err.message)
    }

}