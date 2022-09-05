import React from 'react';
import { Footer } from "../layouts/Footer";

const Farmers = () => {
  return (
    <>
      <header
        className="w-full h-[70vh] bg-[url('https://images.unsplash.com/photo-1609554259810-ad331c1a9519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-5xl text-white font-bold drop-shadow-lg">Meet the Farmers</h1>
        </div>
      </header>
      <Footer />
    </>
  )
}

export default Farmers;