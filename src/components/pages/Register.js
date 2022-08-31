import React from 'react'
import { Nav } from '../layouts/Nav'
import { register } from '../actions/register'
import { connect } from 'react-redux'

const Register = ({register}) => {

  const registerHandler = () => {
    register({
      first_name: "test",
      last_name: "One",
      user_name: "testOne",
      image: "",
      email: "testone@email.com",
      password: "12345678",
      password_confirmation: "12345678",
      role: "farmer",
      bio: "farming",
      city: "Baguio",
      barangay: "Pico",
      town: "La Trinidad",
      province: "Benguet"
    })

  }

  return (
    <>
      <Nav />
      <div className='text-center text-5xl'>
        <h1>Register</h1>
        <button onClick={registerHandler}>Click</button>
      </div>
    </>
  )
}

export default connect(null, {register})(Register)
