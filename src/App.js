import Homepage from "./components/pages/Homepage";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Products from './components/pages/Products'
import Cart from "./components/pages/Cart";
import Nav from "./components/layouts/Nav";
import Farmers from "./components/pages/Farmers";
import Wholesale from "./components/pages/Wholesale";
import SellerDashboard from "./components/pages/SellerDashboard";
import BuyerDashboard from "./components/pages/BuyerDashboard";
import CreateProduct from "./components/pages/CreateProduct";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { reloadUser } from "./components/actions/user";
import { loadCartItems } from "./components/actions/cart";
import LoadBar from "./components/layouts/LoadBar";
import NoMatch from "./components/pages/NoMatch";


const Dashboard = ({ userRole }) => {

  if (userRole === "farmer") {
    return <SellerDashboard />;
  }
  return <BuyerDashboard />;
};


function App({ user, reloadUser, loadCartItems }) {

  const navigate = useNavigate()

  const location = useLocation()

  const [role, setRole] = useState('')


  useEffect(() => {

    if (JSON.parse(window.localStorage.getItem('headers'))) {
      reloadUser()
      const storageData = JSON.parse(window.localStorage.getItem('headers'))
      loadCartItems(storageData)
    } else {
      navigate('/sign-in')
    }

  }, [])

  useEffect(() => {
    if (user.headers) {
      loadCartItems(user.headers)
    }

    if (user.user) {
      setRole(user.user.role)
    }

  }, [user])

  console.log(role)

  return (
    <>

      <LoadBar></LoadBar>
      {role !== 'farmer' && <Nav user={user} />}
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/sign-in' element={<SignIn></SignIn>} />
        <Route path='/products' element={<Products user={user} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/farmers' element={<Farmers />} />
        <Route path='/wholesale' element={<Wholesale />} />

        <Route path='dashboard' element={<Dashboard userRole={role} />} />
        <Route path='new-product' element={<CreateProduct />} />


        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

const MapToStatePros = state => ({
  user: state.user
})


export default connect(MapToStatePros, { reloadUser, loadCartItems })(App);