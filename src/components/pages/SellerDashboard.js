import React from "react";
import Sidebar from "../layouts/Sidebar";

const SellerDashboard = () => {
    return (
      <div className="flex">
        <Sidebar />
        <div className="container mx-auto mt-12">
          <div className="flex mb-4">
            <div className="w-1/.7">
              <div className="w-full px-4 py-5 bg-teal rounded-3xl shadow">
                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
                  <div className="ml-10 border-r border-r-white text-white">
                    <div className="grid grid-cols-2">
                      <img src="https://img.icons8.com/pastel-glyph/50/000000/wallet--v1.png"/>
                      <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-graph-investment-kiranshastry-lineal-kiranshastry.png"/>
                    </div>
                    
                    <div className="grid grid-cols-2 py-5">
                      <div>
                        <p>Total Sales</p>
                        <p>789</p>
                      </div>
                      <div>
                        <img src="https://img.icons8.com/ios/20/000000/squiggly-line.png"/>
                        +4%
                      </div>
                    </div>
                  </div>
                  <div className="ml-10 border-r border-r-white text-white">
                    <div className="grid grid-cols-2">
                      <img src="https://img.icons8.com/external-line-icons-royyan-wijaya/50/000000/external-eyes-whatsername-medical-line-line-icons-royyan-wijaya.png"/>
                      <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-graph-business-finance-kmg-design-detailed-outline-kmg-design.png"/>
                    </div>
                    <div className="grid grid-cols-2 py-5">
                      <div>
                        <p>Visitor</p>
                        <p>12K</p>
                      </div>
                      <div>
                        <img src="https://img.icons8.com/ios/20/000000/squiggly-line.png"/>
                        +2%
                      </div>
                    </div>
                  </div>
                  <div className="ml-10 text-white">
                    <div className="grid grid-cols-2">
                      <img src="https://img.icons8.com/ios/50/000000/empty-filter.png"/>
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-graph-business-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
                    </div>
                    <div className="grid grid-cols-2 py-5">
                      <div>
                        <p>CVR</p>
                        <p>8,11</p>
                      </div>
                      <div>
                        <img src="https://img.icons8.com/ios/20/000000/squiggly-line.png"/>
                        +3%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">Important Today</h1>
              <p className="ml-2">Activities you need to monitor to maintain buyer satisfaction</p>
              <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
                <div className="bg-white rounded shadow p-6 w-64">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    New order
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-gray-900">
                    12,00
                  </div>
                </div>
                <div className="bg-white rounded shadow p-6 w-64">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    Ready to ship
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-gray-900">
                    $ 450k
                  </div>
                </div>
                <div className="bg-white rounded shadow p-6 w-64">
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
