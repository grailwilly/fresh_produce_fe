import React, { useEffect, useState } from "react";
import Sidebar from "../layouts/Sidebar";
import { connect } from "react-redux";
import { priceFormat } from "../helpers/helpers";
import { productBox } from "../actions/productBox";




const SellerProducts = ({productBox, item,user}) => {


    const [items,setItems] = useState([])


useEffect(() => {
    if(!user.headers) {
        return
    }
    productBox()
},[user])

useEffect(() => {

    const filtered = item.filter(e => e.user_id === user.user.id)
    setItems(filtered)

}, [item])


    return (
        <>
            <div className="flex">
                <aside className="h-screen sticky top-0">
                    <Sidebar />
                </aside>
                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div className="flex justify-start item-start space-y-2 flex-col ">
                        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Your Products</h1>
                    </div>
                    {items.map((e,i) => {   
                          return (
                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                   
                     <div key={i} className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            
                                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <img className="w-full hidden md:block" src={e.image} alt="dress" />
                                        <img className="w-full md:hidden"alt="dress" />
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{e.name}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="text-gray-300">Price : </span> {priceFormat(e.price)}
                                                </p>
                                       
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

const MapToStateProps = state => ({
    item: state.productBox,
    user: state.user
})

export default connect(MapToStateProps,{productBox})(SellerProducts);