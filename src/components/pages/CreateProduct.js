import {useState} from "react";
import Sidebar from "../layouts/Sidebar";
import { createProduct } from "../actions/products";
import { connect } from "react-redux";
import user from "../reducers/userReducer";

const CreateProduct = ({createProduct,user}) => {

  const [image,setImage] = useState('')

  const [productData,setProductData] = useState({
    image:'',
    name: '',
    minimum_order: '',
    qty_measurement: '',
    harvest_time: '',
    product_type: '',
    price:'',
    minimum_order:''
  })

  const uploadChangeHandler = (el) => {

   const image =  URL.createObjectURL(el.target.files[0])

   setImage(image)

   const imageInfo =  el.target.files[0]

    setProductData(e => {
      return {
        ...e,
        image:imageInfo
      }
    })
  }

  const changeHandler = (e) => {
    const {name,value} = e.target
    setProductData(data => {
      return {
        ...data,
        [name]:value
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    createProduct(productData,user.headers)
  }


  return (
    <>
      <div className="flex">
        <aside className="h-screen sticky top-0">
          <Sidebar />
        </aside>
        <div className='container'>
          <h1 className="p-5 text-xl font-bold text-center w-full">New Product</h1>
          <form className="p-20">
            <div className="relative z-0 mb-6 w-full group">
              <input onChange={changeHandler} value={productData.name } type="text" name="name" id="product_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="product_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <label htmlFor="product_type" className="sr-only">Product type</label>
              <select id="product_type" name='product_type' onChange={changeHandler} value={productData.product_type} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option defaultValue=''>Product Type</option>
                <option value="box">Box</option>
                <option value="adopt">Adopt</option>
              </select>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input type="number" name="price" id="price" onChange={changeHandler} value={productData.price} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
              <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
            </div>
            {/* <div className="relative z-0 mb-6 w-full group">
            <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Units Available</label>
        </div> */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input type="number" name="minimum_order" id="minimum_order"  onChange={changeHandler} value={productData.minimum_order} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label htmlFor="minimum_order" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Minimum Order</label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input type="text" name="qty_measurement" id="qty_measurement"  onChange={changeHandler} value={productData.qty_measurement} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label htmlFor="qty_measurement" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Qty Measurement (eg. kg, g, pcs)</label>
              </div>
            </div>
            {productData.product_type === 'adopt' && <div className="grid md:grid-cols-2 md:gap-6">
              <div  onChange={changeHandler} value={productData.harvest_time} className="relative z-0 mb-6 w-full group">
                <input type="date" name="harvest_time" id="harvest_time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                <label htmlFor="harvest_time" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Harvest Time</label>
              </div>
            </div>
            }
            <div className="flex justify-center mt-8">
              <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">Product Image</label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Attach a file</p>
                      </div>
                      <input onChange={uploadChangeHandler} type="file" className="opacity-0" accept='image/*' />
                     {image.length > 0 && <img src={image} width='400' height='400' /> }
                      
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" onClick={submitHandler} className="text-white bg-teal font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create Product</button>
          </form>
        </div>
      </div>
    </>
  )
}

const MapToStateProps = state => ({

  user: state.user,


})


export default connect(MapToStateProps,{createProduct})(CreateProduct);