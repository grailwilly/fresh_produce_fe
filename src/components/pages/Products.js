import { Nav } from "../layouts/Nav"
import Loading from "../layouts/Loading";
import { lazy, Suspense } from 'react';

const BuyAbox = lazy(() => import("./products/BuyABox"));


const Products = ({user}) => {

  return (
    <>
     
      <Suspense fallback={<Loading />}>
        <BuyAbox user={user}/>
      </Suspense>

    </>
  )
}


export default Products