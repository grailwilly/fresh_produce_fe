import { connect } from 'react-redux'
import products from '../../actions/products'
import { productBox, increaseQty, decreaseQty, updateQty } from '../../actions/productBox'
import { priceFormat } from '../../helpers/helpers'
import { useEffect } from 'react'
import { addCart } from '../../actions/cart'
import { Link } from 'react-router-dom'


const BuyABox = ({ addCart, productItems, productBox, cardData, increaseQty, decreaseQty, updateQty, user }) => {


  useEffect(() => {
    productBox()
  }, [productBox])


  const qtyChangeHandler = (e, id) => {
    updateQty(e.target.value, id)
  }

  const add = (id) => {
    increaseQty(id)
  }
  const decrease = (id) => {
    decreaseQty(id)
  }

  const addCartHandler = (e) => {

    addCart(cardData.find(d => d.id == e))

  }

  return (
    <>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto flex justify-center">
          <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
              <h1>Buy A Box</h1>
              <div className="flex items-center">
                <p className="text-gray-500 dark:text-gray-300">{`${productItems.length} items`}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {
                productItems.map((e, i) => {
                  return (
                    <div key={i} className="flex flex-col items-center justify-center w-full max-w-lg mx-auto border border-teal p-5 rounded">
                      <img className="object-cover w-full rounded-md " src={e.image} alt="box" />
                      <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200 text-cus-sm">{e.name}</h4>
                      <p className="my-2 text-blue-500 text-xs">{`${priceFormat(e.price)} per box`}</p>
                      {user.action && <> 
                      <div className="custom-number-input h-10 w-32">
        
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                         <button data-action="decrement" onClick={() => decrease(e.id)} className="bg-teal text-gray-600 hover:text-white hover:bg-dark-green h-full w-20 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin text-white">−</span>
                          </button>
                            <input type="number" className="outline-none focus:outline-none text-center w-full bg-[#D7F6E6] font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" onChange={(el) => qtyChangeHandler(el, e.id)} name="custom-input-number" value={cardData.length > 0 ? cardData.find(el => el.id === e.id).qty : 0}></input>
                            <button data-action="increment" onClick={() => add(e.id)} className="bg-teal text-gray-600 hover:text-white hover:bg-dark-green h-full w-20 rounded-r cursor-pointer">
                              <span className="m-auto text-2xl font-thin text-white">+</span>
                            </button>
                            </div>
                      </div>
                      </>
                        }
                      <span className="mt-5 text-xs text-dk-white">{`10 ${e.qty_measurement} / box`}</span>

                      {user.action && <button onClick={() => addCartHandler(e.id)} className=" bg-teal hover:bg-dark-green flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md  ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <span className="mx-1 text-cus-sm text-white">Add to cart</span>
                      </button>
                      }

                      {!user.action && <Link to='/sign-in'> <button className=" bg-teal hover:bg-dark-green flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform rounded-md  ">
                        <svg className="w-5 h-5 mx-1 " xmlns="http://www.w3.org/2000/svg" width='20px' viewBox="0 0 64 64" aria-labelledby="title"
                          aria-describedby="desc" role="img" >
                          <title>Lock</title>
                          <desc>A line styled icon from Orion Icon Library.</desc>
                          <path data-name="layer2"
                            d="M19 30V15A13 13 0 0 1 32 2a13 13 0 0 1 13 13v15" fill="none" stroke="#fff"
                            strokeMiterlimit="10" strokeWidth="2"></path>
                          <path data-name="layer1" fill="#fff" stroke="#fff" strokeMiterlimit="10"
                            strokeWidth="2" d="M32 41v10"></path>
                          <rect data-name="layer1" x="10" y="30" width="44" height="32" rx="6"
                            ry="6" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2"></rect>
                        </svg>
                        <span className="mx-1 text-cus-sm text-white">Login</span>
                      </button>
                      </Link>
                      }


                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

const MapToStateProps = state => ({
  productItems: state.products,
  cardData: state.productBox
})

export default connect(MapToStateProps, { addCart, products, productBox, increaseQty, decreaseQty, updateQty })(BuyABox)