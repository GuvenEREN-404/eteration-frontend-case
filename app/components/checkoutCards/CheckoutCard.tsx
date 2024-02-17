import React from 'react'

type Props = {}

const CheckoutCard = (props: Props) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2>Checkout</h2>
      <p>Total Price: <span className="text-[#2A59FE]">177.000</span></p>
      <button className="btn btn-primary">Checkout</button>
    </div>
  </div>
  )
}

export default CheckoutCard