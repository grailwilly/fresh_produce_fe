import Loading from "../layouts/Loading";
import { lazy, Suspense, useEffect } from 'react';
import {Footer} from "../layouts/Footer";

const BuyAbox = lazy(() => import("./products/BuyABox"));


const Products = ({user}) => {


  return (
    <>
     
      <Suspense fallback={<Loading />}>
        <BuyAbox user={user}/>
      </Suspense>
      <Footer />

    </>
  )
}


export default Products