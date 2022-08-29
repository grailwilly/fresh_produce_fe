import Homepage from "./components/pages/Homepage";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import Products from "./components/pages/Products";
import { Route, Routes } from "react-router-dom";
import products from "./components/actions/products";
import { useEffect } from "react";
import { connect } from "react-redux";


function App({productItems, products}) {

  

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
        <Route path='/products' productItems={productItems} element={<Products></Products>} />
      </Routes>
    </>
  );
}

const MapToStateProps = state => ({
  productItems: state.products
})


export default connect(MapToStateProps,{products})(App);
