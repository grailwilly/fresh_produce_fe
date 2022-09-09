import React from 'react';
import { Footer } from "../layouts/Footer";
import farmerBanner from "../../assets/farmer_banner.png";

const Farmers = () => {
  return (
    <>
      <header
        className="w-full h-[70vh] flex justify-center items-center" style={{ backgroundImage: `url(${farmerBanner})`, backgroundPosition: 'center',
        backgroundSize: 'cover'}}>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-5xl text-white font-bold drop-shadow-lg">Meet the Farmers</h1>
        </div>
      </header>
      <section className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/3">
            <div className="group relative w-96">
              <img className="w-full object-cover"
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              <div
                  className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-teal opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <h1 className="text-white text-2xl">Farmers Name</h1>
                  <a className="mt-5 px-8 py-3 rounded-full bg-gold duration-300" href="#">View More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Farmers;