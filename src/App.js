import Homepage from "./components/pages/Homepage";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import { Route, Routes, useNavigate } from "react-router-dom";
import Products from './components/pages/Products'
import Cart from "./components/pages/Cart";
import Nav from "./components/layouts/Nav";
import { connect } from "react-redux";
import { useEffect } from "react";
import { reloadUser } from "./components/actions/user";

function App({user,reloadUser}) {

  const navigate = useNavigate()

  useEffect(() => {

    if(JSON.parse(window.localStorage.getItem('user'))){
      reloadUser()
    }

  },[])

  return (
    <>
      <Nav user={user}/>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/sign-in' element={<SignIn></SignIn>} />
        <Route path='/products'element={<Products user={user} />} />
        <Route path='/cart'element={<Cart/>} />
      </Routes>
    </>
  );
}

const MapToStatePros = state => ({
  user: state.user
})


export default connect(MapToStatePros,{reloadUser})(App);
