import { baseURL } from "../constants/constants"
import axios from "axios"
import { MY_SOLD } from "../constants/constants"


export const getMySold = (headers) => async dispatch => {

    const url = `${baseURL}v1/sold`
 

    try {

        

        const res = await axios({
            method:'get',
            url,
            headers
        })
        
        dispatch({
            type:MY_SOLD,
            action: res.data
        })

    } catch (err) {
        console.error(err.message)
    }



}