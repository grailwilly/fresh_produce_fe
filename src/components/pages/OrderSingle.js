import React from 'react'
import { useParams } from 'react-router-dom'

const OrderSingle = () => {

    const id = useParams()

    console.log(id)

  return (
    <div>{`${id.id}`}</div>
  )
}

export default OrderSingle