import Homepage from "./components/pages/Homepage";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import { Route, Routes } from "react-router-dom";
import Products from './components/pages/Products'
import Cart from "./components/pages/Cart";
import { Nav } from "./components/layouts/Nav";

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/sign-in' element={<SignIn></SignIn>} />
        <Route path='/products'element={<Products/>} />
        <Route path='/cart'element={<Cart/>} />
      </Routes>
    </>
  );
}


export default App;
