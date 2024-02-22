"use client"
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/_redux/store";
import { removeToBasket } from '@/app/_redux/features/basket-slice';

type Props = {}

const CheckoutCard = (props: Props) => {
  const dispatch = useDispatch()
  const totalPrice = useSelector(
    (state: RootState) => state.basketSlice.totalPrice
  );
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2>Checkout</h2>
      <p>Total Price: <span className="text-[#2A59FE]">{totalPrice.toLocaleString()}</span></p>
      <button onClick={()=>{dispatch(removeToBasket())}} className="btn btn-primary">Checkout</button>
    </div>
  </div>
  )
}

export default CheckoutCard