import axios from 'axios';
import { REGISTER_USER, baseURL } from '../constants/constants';

export const register = (userInfo) => async dispatch => {
  const url = `${baseURL}v1/auth/`
  
  try {
    // const response = axios.post(url)
    // console.log(userInfo)
  
    const res = await axios({
      method: 'post',
      url: url,
      data: userInfo,
    });
    
    dispatch({
      type: REGISTER_USER,
      action: res
    })
  } catch (err) {
    console.error(err.message)
  }
}