
import { Nav } from '../layouts/Nav'
import { connect } from 'react-redux'
import products from '../actions/products'
import { useEffect } from 'react'

const Products = ({ productItems, products }) => {


  useEffect(() => {


    const loadProduct = async () => {
      await products()
    }

    if(productItems.length < 1) {
      loadProduct()
    }

  },[productItems,products])

  return (
    <>
      <Nav />
      <div className='text-center text-5xl'>
        <h1>Products
        </h1>
      </div>
      <div className='flex gap-20 mt-20 justify-center flex-wrap'>
        {
          productItems.map((e,i) => {
            return <div key={i}>{e.name}</div>
          })
        }
      </div>
    </>
  )
}

const MapToStateProps = state => ({
  productItems: state.products
})

export default connect(MapToStateProps, {products})(Products)