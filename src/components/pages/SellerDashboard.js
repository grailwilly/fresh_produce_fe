import React from "react";
import Sidebar from "../layouts/Sidebar";

const SellerDashboard = () => {
    return (
      <div className="flex">
        <Sidebar />
        <div className="container mx-auto mt-12">
          <div className="flex mb-4">
            <div className="w-1/.7">
              <div className="w-full px-4 py-5 bg-teal rounded-lg shadow">
                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
                  <div>
                    <p>Total Sales</p>
                  </div>
                  <div>
                    <p>Visitor</p>
                  </div>
                  <div>
                    <p>CVR</p>
                  </div>
                </div>
              </div>
              <h1 className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">Important Today</h1>
              <p className="ml-2">Activities you need to monitor to maintain buyer satisfaction</p>
              <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    New order
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-gray-900">
                    12,00
                  </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-md shadow">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    Ready to ship
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-gray-900">
                    $ 450k
                  </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    In Delivery
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-gray-900">
                    20k
                  </div>
                </div>
              </div>
              <div>
                <h1 className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">Summary Revenue</h1>
                <p className="ml-2">Last update: 2 September 2022 13:00</p>
                <div>
                  <img src="https://cdn.dribbble.com/users/2443050/screenshots/16964305/media/85c1bbd7ffe380b268f80d149f3ebcac.png?compress=1&resize=1000x750&vertical=top" />
                </div>
              </div>
            </div>
            <div className="1/4">
              <div>
                <p>Today's Best seller</p>  
              </div>
              <div>
                <p>Almost Out of Stock</p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SellerDashboard;
