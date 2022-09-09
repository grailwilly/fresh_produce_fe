import {useEffect, useState} from "react";
import Sidebar from "../layouts/Sidebar";
import { getMySold } from "../actions/sold";
import { connect } from "react-redux";
import { priceFormat } from "../helpers/helpers";
import Chart from "./Chart";

const SellerDashboard = ({getMySold,user,sold}) => {

  const [totalSales,setTotalSales] = useState(0)
  const [waitingPayment,setWaitingPayment] = useState(0)
  const [paidOrders,setPaidOrders] = useState(0)
  const [inDelivery,setIndelivery] = useState(0)

  useEffect(() => {
    getMySold(user.headers)
  },[user])

  useEffect(() => {
    
    let total = sold.map(e => e.price)
    total = total.reduce((a,b) => a+b,0)
    setTotalSales(total)
  }, [sold])


  useEffect(() => {
    const pending = sold.filter(e => e.status === null)
    setWaitingPayment(pending.length)
  },[sold])

  useEffect(() => {
    const paid = sold.filter(e => e.status === 'paid')
    setPaidOrders(paid.length)
  },[sold])

  useEffect(() => {
    const delivery = sold.filter(e => e.status === 'delivery')
    setIndelivery(delivery.length)
  },[sold])

    return (
      <div className="flex">
        <aside className="h-screen sticky top-0">
          <Sidebar />
        </aside>
        <div className="container mx-auto mt-12">
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Sales
              </div>
               <div className="mt-1 text-3xl font-semibold text-gray-900">
                {priceFormat(totalSales)}
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                Pending Payment
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                {waitingPayment}
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                Paid Orders
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                {paidOrders}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Chart />
          </div>
        </div>
        
      </div>
    );
}

const MapToStateProps = state => ({
  user: state.user,
  sold: state.sold
})

export default connect(MapToStateProps,{getMySold})(SellerDashboard);
