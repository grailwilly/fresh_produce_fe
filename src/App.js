import Homepage from "./components/pages/Homepage";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import { Route, Routes } from "react-router-dom";
import products from "./components/actions/products";
import { useEffect, } from "react";
import { connect } from "react-redux";
import Products from './components/pages/Products'

function App({products}) {

  

   useEffect(() => {
    //load all product
    products()
    
  },[products])


  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/sign-in' element={<SignIn></SignIn>} />
        <Route path='/products'element={<Products/>} />
      </Routes>
    </>
  );
}

const MapToStateProps = state => ({
  productItems: state.products
})


export default connect(MapToStateProps,{products})(App);
