import { priceFormat } from '../helpers/helpers'
import { connect } from 'react-redux'
import { useEffect,useState } from 'react'
import {increaseCartQty,decreaseCartQty,updateCartQty,removeCartItem} from '../actions/cart'

const Cart = ({ items, increaseCartQty,decreaseCartQty,updateCartQty,removeCartItem}) => {

    const [cartItems,setCartItems] = useState([])


    useEffect(() => {
        setCartItems(items)
    },[items])

    const qtyChangeHandler = (e,id) => {
        const {value} = e.target
        updateCartQty(value,id)
       
    }

    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">3 Items</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>


                        {/* start loop */}

                        {cartItems.length > 0 && cartItems.map((e,i) => {
                            return (
                                <div key={i} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={e.image} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{e.name}</span>
                                            <span className="text-red-500 text-xs">{`type - ${e.product_type}`}</span>
                                            <span  onClick={() => removeCartItem(e.id)} className="font-semibold hover:text-[#ff0000] text-gray-500 text-xs">Remove</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <svg onClick={()=>decreaseCartQty(e.id)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>

                                        <input className="mx-2 border text-center w-8" type="number" onChange={(el) => qtyChangeHandler(el,e.id)} value={e.qty} />

                                        <svg onClick={() => increaseCartQty(e.id)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">{priceFormat(e.price)}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">{priceFormat(e.price * e.qty)}</span>
                                </div>
                            )
                        })}
                        {/* start loop */}



                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">{`items `}</span>
                            <span className="font-semibold text-sm uppercase">{`Amount `}</span>
                        </div>

                        {cartItems.length > 0 && cartItems.map((e,i) => {
                            return (
                                <div key={i} className="flex justify-between my-2">
                                    <span className="text-sm uppercase text-xs">{e.name}</span>
                                    <span className="text-sm uppercase text-xs">{`(${e.qty}) - ${priceFormat(e.price * e.qty)}`}</span>
                                </div>
                            )

                        })}
                        <div> 
                        </div>
                        <div className="py-10">
                            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>{cartItems.length > 0 && priceFormat(cartItems.map(e => e.price * e.qty).reduce((a, b) => a + b))}</span>
                            </div>
                            <button className="bg-teal font-semibold hover:bg-dark-green py-3 text-sm text-white uppercase w-full">Complete Order</button>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

const MapToStateProps = state => ({
    items: state.cart
})


export default connect(MapToStateProps, {increaseCartQty,decreaseCartQty,updateCartQty,removeCartItem})(Cart)