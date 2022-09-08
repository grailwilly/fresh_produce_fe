
import { LOAD_PRODUCTS, CREATE_PRODUCT } from '../constants/constants'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../constants/firebase';
import axios from 'axios'
import { baseURL } from '../constants/constants'


export const products = () => async dispatch => {

    try {
        const res = await axios.get(`${baseURL}v1/products/`)
        if (res) {
            dispatch({
                type: LOAD_PRODUCTS,
                action: res.data
            })
        }
    } catch (err) {
        console.error(err.message)
    }
}

export const createProduct = (productInfo,headers) => async dispatch => {

    const url = `${baseURL}v1/products`
    const file = productInfo.image
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            productInfo.image = downloadURL
           
            try {
                const res = await axios({
                    method:'post',
                    url,
                    headers,
                    data: productInfo
                })
                if(res) {
                    dispatch({
                        type:CREATE_PRODUCT,
                        action:res.status
                    })
                }
            } catch (err) {
                console.error(err.message)
                dispatch({
                    type:CREATE_PRODUCT,
                    action:500
                })
            }
            
          });
        }
      );



}