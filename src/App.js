import Homepage from "./components/pages/Homepage";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import { Route, Routes } from "react-router-dom";
import Products from './components/pages/Products'

function App() {

  


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


export default App;
