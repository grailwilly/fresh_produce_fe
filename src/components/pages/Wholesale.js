import React from "react";
import {Footer} from '../layouts/Footer';
import QuoteModal from "../layouts/QuoteModal";
import wholesaleBanner from "../../assets/wholesale_banner.png";

const Wholesale = () => {
  return (
    <>
      <header
        className="w-full h-[70vh]" style={{ backgroundImage: `url(${wholesaleBanner})`, backgroundPosition: 'center',
        backgroundSize: 'cover'}}>
        <div className="flex flex-col ml-20">
            <h1 className="mt-20 text-5xl text-white font-bold drop-shadow-lg w-96 xs:w-100">Find Premium Quality Fresh Produce</h1>
            <p className="mt-5 text-lg text-white opacity-100 w-96 text-justify">At farmer's valley market, finding the varying fresh supplies is made easy. We offer a wide-ranging product line considering everything that falls under the your business needs.</p>
            <QuoteModal />
        </div>
      </header>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal mb-5 flex-shrink-0">
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">100% Customer Satisfaction</h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal mb-5 flex-shrink-0">
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Quality Assurance</h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal mb-5 flex-shrink-0">
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Safe & Secure Payment Options </h2>
                </div>
              </div>
              <div className="p-4 md:w-1/4 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-teal mb-5 flex-shrink-0">
                  {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg> */}
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3,18 L1,18 L1,3 L14,3 L14,17 M14,18 L9,18 M6,21 C7.65685425,21 9,19.6568542 9,18 C9,16.3431458 7.65685425,15 6,15 C4.34314575,15 3,16.3431458 3,18 C3,19.6568542 4.34314575,21 6,21 Z M17,21 C18.6568542,21 20,19.6568542 20,18 C20,16.3431458 18.6568542,15 17,15 C15.3431458,15 14,16.3431458 14,18 C14,19.6568542 15.3431458,21 17,21 Z M14,8 L19,8 L23,13 L23,18 L20,18"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">On-time Door Step Delivery</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="overflow-hidden text-gray-700">
          <div className="px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-2/3">
                <div className="w-full p-1 md:p-2 flex flex-col justify-center items-center">
                  <h1 className="text-3xl">Farmer's Valley Market Ph</h1>
                  <h1 className="text-teal text-4xl lg:text-6xl font-black mb-2">Wholesale Range</h1>
                  <p className="text-center w-96">Offering variety of products available for wholesale supply for catering to the needs of varying businesses.</p>
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <div className="block bg-cover bg-center w-full h-48 rounded-lg bg-black
                      bg-[url('https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')] ">
                        <div className="flex flex-col justify-center items-center h-full">
                          <h1 className=" text-white text-5xl text-white font-bold drop-shadow-lg">Vegetables</h1>
                        </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <div className="block bg-cover bg-center w-full h-48 rounded-lg
                    bg-[url('https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')] ">
                      <div className="flex flex-col justify-center items-center h-full">
                        <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">Fruits</h1>
                      </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <div className="block bg-cover bg-center w-full h-48 rounded-lg
                    bg-[url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')] ">
                      <div className="flex flex-col justify-center items-center h-full">
                        <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">Meat</h1>
                      </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2">
                  <div className="block bg-cover bg-center w-full h-48 rounded-lg
                    bg-[url('https://images.unsplash.com/photo-1500732917506-30dc38b6477f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80')] ">
                      <div className="flex flex-col justify-center items-center h-full">
                        <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">Seafood</h1>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Wholesale;