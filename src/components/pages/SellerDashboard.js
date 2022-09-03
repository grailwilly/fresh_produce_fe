import React from "react";
import Sidebar from "../layouts/Sidebar";

const SellerDashboard = () => {
    return (
      <div className="flex">
        <aside className="h-screen sticky top-0">
          <Sidebar />
        </aside>
        <div className="container mx-auto mt-12">
          <div>
            <div>
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
              <h1 className="ml-2 mt-10 text-xl font-bold tracking-wide text-gray-900 uppercase">Important Today</h1>
              <p className="ml-2 mb-5">Activities you need to monitor to maintain buyer satisfaction</p>
              <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
                <div className="bg-white rounded-3xl shadow p-6 w-64">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    New order
                  </div>
                  <div className="grid grid-cols-2">
                    <img src="https://img.icons8.com/external-flat-icons-inmotus-design/50/000000/external-Order-round-mobile-ui-set-flat-icons-inmotus-design.png"/>
                    <p className="mt-1 text-3xl font-semibold text-gray-900">200</p>
                  </div>
                  <p>Potential +Php 1,000,000</p>
                </div>
                <div className="bg-white rounded-3xl shadow p-6 w-64">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    Ready to ship
                  </div>
                  <div className="grid grid-cols-2">
                    <img src="https://img.icons8.com/color/50/000000/buy--v1.png"/>
                    <p className="mt-1 text-3xl font-semibold text-gray-900">300</p>
                  </div>
                  <p>Potential +Php 100,000</p>
                </div>
                <div className="bg-white rounded-3xl shadow p-6 w-64">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    In delivery
                  </div>
                  <div className="grid grid-cols-2">
                    <img src="https://img.icons8.com/color/48/000000/shipped.png"/>
                    <p className="mt-1 text-3xl font-semibold text-gray-900">300</p>
                  </div>
                  <p>Potential +Php 500,000</p>
                </div>
              </div>
              <div>
                <h1 className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">Summary Revenue</h1>
                <div>
                  <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
		                <h2 className="text-xl font-bold">Monthly Revenue</h2>
		                <span className="text-sm font-semibold text-gray-500">2022</span>
		                <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
			                <div className="relative flex flex-col items-center flex-grow pb-5 group">
				                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$37,500</span>
				                <div className="relative flex justify-center w-full h-8 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-6 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-16 bg-gold"></div>
                        <span className="absolute bottom-0 text-xs font-bold">Jan</span>
			                </div>
                      <div className="relative flex flex-col items-center flex-grow pb-5 group">
                        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$45,000</span>
                        <div className="relative flex justify-center w-full h-10 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-6 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-20 bg-gold"></div>
                        <span className="absolute bottom-0 text-xs font-bold">Feb</span>
                      </div>
                      <div className="relative flex flex-col items-center flex-grow pb-5 group">
                        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                        <div className="relative flex justify-center w-full h-10 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-8 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-20 bg-gold"></div>
                        <span className="absolute bottom-0 text-xs font-bold">Mar</span>
                      </div>
                      <div className="relative flex flex-col items-center flex-grow pb-5 group">
                        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$50,000</span>
                        <div className="relative flex justify-center w-full h-10 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-6 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-24 bg-gold"></div>
                        <span className="absolute bottom-0 text-xs font-bold">Apr</span>
                      </div>
                      <div className="relative flex flex-col items-center flex-grow pb-5 group">
                        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$47,500</span>
                        <div className="relative flex justify-center w-full h-10 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-8 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-20 bg-gold"></div>
                        <span className="absolute bottom-0 text-xs font-bold">May</span>
                      </div>
                      <div className="relative flex flex-col items-center flex-grow pb-5 group">
                        <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$55,000</span>
                        <div className="relative flex justify-center w-full h-12 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-8 bg-gold"></div>
                        <div className="relative flex justify-center w-full h-24 bg-gold"></div>
                        <span className="absolute bottom-0 text-xs font-bold">Jun</span>
                      </div>
                    <div className="relative flex flex-col items-center flex-grow pb-5 group">
                      <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$60,000</span>
                      <div className="relative flex justify-center w-full h-12 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-16 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-20 bg-gold"></div>
                      <span className="absolute bottom-0 text-xs font-bold">Jul</span>
                    </div>
                    <div className="relative flex flex-col items-center flex-grow pb-5 group">
                      <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$57,500</span>
                      <div className="relative flex justify-center w-full h-12 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-10 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-24 bg-gold"></div>
                      <span className="absolute bottom-0 text-xs font-bold">Aug</span>
                    </div>
                    <div className="relative flex flex-col items-center flex-grow pb-5 group">
                      <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$67,500</span>
                      <div className="relative flex justify-center w-full h-12 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-10 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-32 bg-gold"></div>
                      <span className="absolute bottom-0 text-xs font-bold">Sep</span>
                    </div>
                    <div className="relative flex flex-col items-center flex-grow pb-5 group">
                      <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$65,000</span>
                      <div className="relative flex justify-center w-full h-12 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-12 bg-gold"></div>
                      <div className="relative flex justify-center w-full bg-gold h-28"></div>
                      <span className="absolute bottom-0 text-xs font-bold">Oct</span>
                    </div>
                    <div className="relative flex flex-col items-center flex-grow pb-5 group">
                      <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$70,000</span>
                      <div className="relative flex justify-center w-full h-8 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-8 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-40 bg-gold"></div>
                      <span className="absolute bottom-0 text-xs font-bold">Nov</span>
                    </div>
                    <div className="relative flex flex-col items-center flex-grow pb-5 group">
                      <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">$75,000</span>
                      <div className="relative flex justify-center w-full h-12 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-8 bg-gold"></div>
                      <div className="relative flex justify-center w-full h-40 bg-gold"></div>
                      <span className="absolute bottom-0 text-xs font-bold">Dec</span>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            {/* <div className="w-1/4">
              <div>
                <p>Today's Best seller</p>  
              </div>
              <div>
                <p>Almost Out of Stock</p>  
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
}

export default SellerDashboard;
