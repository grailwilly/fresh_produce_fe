import { Nav } from "../layouts/Nav";
import { connect } from "react-redux";
import products from '../actions/products'
import { useEffect } from "react";


const Homepage = ({products}) => {

  useEffect(() => {
    const loadProduct = async () => {
      await products()
    }

    loadProduct()

    return () => {
      return () => {}
    };

  },[products]);

  return (
    <>
      <Nav />
      <div className="text-center text-5xl">
        Homepage
      </div>
    </>

  )
}

export default connect(null,{products})(Homepage)