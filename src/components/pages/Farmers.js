import React, { useEffect, useState } from 'react';
import { Footer } from "../layouts/Footer";

import { connect } from 'react-redux';
import { getAllFarmers } from '../actions/farmer';
import farmerBanner from "../../assets/farmer_banner.png";

const Farmers = ({ farm, getAllFarmers }) => {

  const [allFarmers, setAllFarmers] = useState([])


  useEffect(() => {
    getAllFarmers()
  }, [])

  useEffect(() => {

    setAllFarmers(farm)
  }, [farm])

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
        {allFarmers.map(e => {
          return (
            <div className="flex flex-wrap w-1/3">
              <div className="group relative w-96">
                <img className="w-full object-cover"
                  src="https://images.unsplash.com/photo-1564622598577-74a9aeff6b37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                <div
                  className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-teal opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                  <h1 className="text-2xl text-white">{`${e.first_name.toUpperCase()} ${e.last_name.toUpperCase()}`}</h1>
                  <a className="mt-5 px-8 py-3 rounded-full bg-gold duration-300" href="#">View More</a>
                </div>
              </div>
            </div>
            )
          })
        }
        </div>
      </section>
      <Footer />
    </>
  )
}

const MapToStateProps = state => ({
  farm: state.farmers
})

export default connect(MapToStateProps, { getAllFarmers })(Farmers);