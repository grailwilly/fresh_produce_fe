import { useEffect, useState } from 'react';
import { myOrders,payNow } from '../actions/order';
import { connect } from 'react-redux';
import { priceFormat } from '../helpers/helpers';
import RequestSpin from "../layouts/RequestSpin";

const BuyerDashboard = ({ myOrders, user, orders,payNow }) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    myOrders(user.headers)
  }, [user])

  useEffect(() => {
    setItems(orders)
  }, [orders])


  const payNowHandler = (e) => {

    let updatedItems = items;

    updatedItems = updatedItems.map(el => {
        if(el.id === e.id) {
         return {
          ...el,
          isLoading: true
         }
        } else {
          return {
            ...el
          }
        }
      
    })
    setItems(updatedItems)

    payNow(e,user.headers)
  }

  return (
    <>
     
      <div className="p-10">
        <h1 className='mb-10'>My Orders</h1>
        {items.map((e, i) => {
          return (

            <div key={i} className="flex justify-center mb-4">
              <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className="w-96 h-48 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={e.image} alt="" />
                <div className="p-6 flex flex-col justify-start w-96">
                  <p className="text-sm text-grey-dark flex items-center">
                    Status: {e.status ? e.status : 'awaiting payment'}
                  </p>
                  <h5 className="text-gray-900 text-xl font-medium mb-2">{e.name}</h5>
                  <p className="text-gray-700 text-base mb-4"><b>Qty:</b> {`${e.qty} boxes`} | <b>Price:</b> {`${priceFormat(e.total)}`}</p>
                  <p className="text-gray-700 text-base mb-4"><b>Seller:</b> {`${e.farmer}`}</p>
                  <div className="flex items-center">
                  {!e.isLoading  && <button className={`bg-teal text-white px-5 ${e.status === 'paid' ? 'hidden' : ''} py-2 rounded hover:bg-dark-green`} onClick={() => payNowHandler(e)}>Pay now</button> }
                      {e.isLoading && <button className='bg-teal text-white px-5 py-2 rounded hover:bg-dark-green'>
                      <div className="animate-spin">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4335 4335" width="20" height="20">
                          <path fill="#fff" d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
                          />
                        </svg>
                      </div>
                    </button> }
                  </div>
                </div>
              </div>
            </div>
      )
        })}
    </div>
    </>
  )
}
const MapToStateProps = state => ({

  user: state.user,
  orders: state.orders

})



export default connect(MapToStateProps, { myOrders,payNow })(BuyerDashboard);