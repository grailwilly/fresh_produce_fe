import { REGISTER_USER } from "../constants/constants"
import axios from "axios"
import { baseURL } from "../constants/constants"

export const register = (userInfo) => async dispatch => {

    const url = `${baseURL}v1/auth`

    try {
        const res = await axios({
            url,
            method: 'post',
            data: userInfo,
        })
        dispatch({
            type: REGISTER_USER,
            action: res.data,
            status: res.status,
            headers: res.headers

        })

        window.localStorage.setItem('user', JSON.stringify({
            user: res.data,
            status: res.status,
            headers: res.headers
        }))

    } catch (err) {

       window.localStorage.removeItem('user')
        dispatch({
           type:REGISTER_USER,
           status: err.response.status,
        })



    }


} 