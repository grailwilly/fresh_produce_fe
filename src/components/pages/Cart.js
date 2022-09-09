import { priceFormat } from '../helpers/helpers'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { increaseCartQty, decreaseCartQty, updateCartQty, removeCartItem, loadCartItems } from '../actions/cart'
import { completeOrder } from '../actions/order'
import { useNavigate } from 'react-router-dom'

const Cart = ({ items, increaseCartQty, decreaseCartQty, updateCartQty, removeCartItem, user, completeOrder }) => {

    const [cartItems, setCartItems] = useState([])
    const [orderCompleted, setOrderedCompleted] = useState(false)
    const [isLoading,setIsLoading] = useState(false)

    const navigate = useNavigate()


    useEffect(() => {
        setCartItems(items)
      

    }, [items])


    const qtyChangeHandler = (e, id) => {
        const { value } = e.target
        updateCartQty(value, id)
    }


    useEffect(() => {

        if (!user.user) {
            navigate('/sign-in')
        } else {
            navigate('/cart')
        }

    }, [user])


    const completeOrderHandler = () => {

        if(cartItems.length < 1 )  {
            return
        }

        setIsLoading(true)
       completeOrder(cartItems, user.headers)

       setTimeout(function(){
        setOrderedCompleted(true)
        setCartItems([])
       },500)
    }

    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{`${cartItems.length} ${cartItems.length > 1 ? 'Items' : 'Item'}`}</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>


                        {/* start loop */}

                        {cartItems.length > 0 && cartItems.map((e, i) => {
                            return (
                                <div key={i} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={e.image} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{e.name}</span>
                                            <span className="text-red-500 text-xs">{`type - ${e.product_type}`}</span>
                                            <span onClick={() => removeCartItem(e.id, user.headers)} className="font-semibold hover:text-[#ff0000] text-gray-500 text-xs">Remove</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <svg onClick={() => decreaseCartQty(e.id)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>

                                        <input className="mx-2 border text-center w-8" type="number" onChange={(el) => qtyChangeHandler(el, e.id)} value={e.qty} />

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

                        {cartItems.length > 0 && cartItems.map((e, i) => {
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
                            {!isLoading &&  <button onClick={completeOrderHandler} className={`bg-teal font-semibold hover:bg-dark-green py-3 text-sm text-white uppercase w-full ${orderCompleted ? 'hidden' : ''} `}>Complete Order</button> }
                           {isLoading && <button className={`bg-teal w-full h-[45px]  ${orderCompleted ? 'hidden' : ''}`}>
                                <div className="animate-spin w-[20px] m-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4335 4335" width="20" height="20">
                                        <path fill="#fff" d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
                                        />
                                    </svg>
                                </div>
                            </button> }

                            {orderCompleted &&  <button className={`bg-teal font-semibold hover:bg-dark-green py-3 text-sm text-white uppercase w-full`}>Order Placed!!</button> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const MapToStateProps = state => ({
    items: state.cart,
    user: state.user
})


export default connect(MapToStateProps, { increaseCartQty, decreaseCartQty, updateCartQty, removeCartItem, loadCartItems, completeOrder })(Cart)