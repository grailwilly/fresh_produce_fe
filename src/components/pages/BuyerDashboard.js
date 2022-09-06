import React from 'react';

const BuyerDashboard = () => {
  return (
    <>
      <nav>
        <ol className="px-5 py-3 flex justify-center items-center bg-gray-200 rounded-md space-x-3">
          <li className="after:content-['\00bb'] after:ml-2">
            <a className="text-base hover:text-teal italic" href="#">My Order</a>
          </li>
          <li className="after:content-['\00bb'] after:ml-2">
            <a className="text-base hover:text-teal italic" href="#">Order History</a>
          </li>
          <li className="after:ml-2">
            <a className="text-base hover:text-teal italic" href="#">Profile</a>
          </li>
        </ol>
      </nav>
      <div className="p-10">
        <div className="flex flex-row justify-center items-center">
          <div className="h-60 w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('https://tailwindcss.com/img/card-left.jpg')]">
          </div>
          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <p className="text-sm text-grey-dark flex items-center">
                Status: On process
              </p>
              <div className="text-black font-bold text-xl mb-2">Basil</div>
              <p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              <p>Qty: 5kg</p>
              <p>Price: 200</p>
              <p>Seller: Farmer's Name</p>
            </div>
            <div className="flex items-center">
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuyerDashboard;