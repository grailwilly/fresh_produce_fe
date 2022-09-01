import { Nav } from "../layouts/Nav"
import Loading from "../layouts/Loading";
import { lazy, Suspense } from 'react';

const BuyAbox = lazy(() => import("./products/BuyABox"));


const Products = () => {

  return (
    <>
     
      <Suspense fallback={<Loading />}>
        <BuyAbox />
      </Suspense>

    </>
  )
}


export default Products