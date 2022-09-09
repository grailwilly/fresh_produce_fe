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

            <div key={i} className="flex flex-row justify-center items-center  mb-5" >
              <div className={`h-60 w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`}>
                <img src={e.image} width='310px' />
              </div>

              <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                <div className="mb-8">
                  <p className="text-sm text-grey-dark flex items-center">
                    Status: {e.status ? e.status : 'awaiting payment'}
                  </p>
                  <div className="text-black font-bold text-xl mb-2">{e.name}</div>

                  <p>Qty: {`${e.qty} boxes`}</p>
                  <p>Price: {`${priceFormat(e.total)}`}</p>
                  <p>Seller: {`${e.farmer}`}</p>
                  <div className="flex justify-center mt-8">
                    <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                      <div className="m-4">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
               {!e.isLoading  && <button className={`bg-teal text-white px-5 ${e.status === 'paid' ? 'hidden' : ''} py-2 rounded hover:bg-dark-green`} onClick={() => payNowHandler(e)}>Pay now</button> }
                  {e.isLoading && <button className='bg-teal text-white px-5 py-2 rounded hover:bg-dark-green'>
                 <RequestSpin></RequestSpin>
                </button> }
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