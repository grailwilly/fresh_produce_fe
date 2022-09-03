import Homepage from "./components/pages/Homepage";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import { Route, Routes, useLocation } from "react-router-dom";
import Products from './components/pages/Products'
import Cart from "./components/pages/Cart";
import Nav from "./components/layouts/Nav";
import SellerDashboard from "./components/pages/SellerDashboard";
import { connect } from "react-redux";
import { useEffect,useState } from "react";
import { reloadUser } from "./components/actions/user";
import { loadCartItems } from "./components/actions/cart";
import LoadBar from "./components/layouts/LoadBar";

function App({ user, reloadUser, loadCartItems }) {


  const location = useLocation()

  

  useEffect(() => {

    if (JSON.parse(window.localStorage.getItem('user'))) {
      reloadUser()
      const storageData = JSON.parse(window.localStorage.getItem('user'))
      loadCartItems(storageData.headers)
    }

  }, [])



  useEffect(() => {
    if (user.headers) {
      loadCartItems(user.headers)
    }
  }, [user])


  return (
    <>

 
  
      <LoadBar></LoadBar>
      {location.pathname !== '/seller-dashboard' && <Nav user={user} />}
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/sign-in' element={<SignIn></SignIn>} />
        <Route path='/products' element={<Products user={user} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/seller-dashboard' element={<SellerDashboard />} />
      </Routes>
    </>
  );
}

const MapToStatePros = state => ({
  user: state.user
})


export default connect(MapToStatePros, { reloadUser, loadCartItems })(App);
