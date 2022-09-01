import { REGISTER_USER,LOGIN_USER,RELOAD_USER,SIGN_OUT } from "../constants/constants"
import axios from "axios"
import { baseURL } from "../constants/constants"


const storeLocal = (obj,action) => {

    const storage = window.localStorage

    if(action === 'remove') {
        storage.removeItem('user')
       
    } else {
        storage.setItem('user', JSON.stringify(obj))
    }
}


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

        storeLocal({
            user: res.data,
            status: res.status,
            headers: res.headers
        },'set')

    } catch (err) {
        storeLocal({},'remove')
        dispatch({
            type:REGISTER_USER,
            status: err.response.status,
         })
    }
} 

export const signIn = (loginInfo) => async dispatch => {

    const url = `${baseURL}v1/auth/sign_in`
   
    try {
        const res = await axios({
            url,
            method: 'post',
            data: loginInfo,
        })
        dispatch({
            type: LOGIN_USER,
            action: res.data,
            status: res.status,
            headers: res.headers

        })

        storeLocal({
            user: res.data,
            status: res.status,
            headers: res.headers
        },'set')

    } catch (err) {
        storeLocal({},'remove')
        dispatch({
            type:LOGIN_USER,
            status: err.response.status,
         })
    }

}

export const reloadUser = () => dispatch => {

    const userInfo = JSON.parse(window.localStorage.getItem('user'))
    dispatch({
        type: RELOAD_USER,
         action: userInfo
    })

}

export const signOut = () => dispatch => {

    storeLocal({},'remove')

    dispatch({
        type: SIGN_OUT
    })

}




