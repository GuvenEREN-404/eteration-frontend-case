"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/_redux/store";
import { decrementToBasketItem, incrementToBasketItem } from "@/app/_redux/features/basket-slice";

type Props = {};

const ProductPurchaseCountdownCard = (props: Props) => {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basketSlice.basket);

  return (
    <div className="card w-72 bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2>Cart</h2>
        {basket.length > 0 ? (
          basket?.map((item, index) => {
            return (
              <div key={index} className="flex flex-row items-center justify-around">
                <div>
                  <h1>{item?.name}</h1>
                  <p className="text-[#2A59FE]">
                    {item?.totalPrice?.toLocaleString()} ₺
                  </p>
                </div>

                <div className="flex flex-row gap-2 ">
                  <button
                    onClick={()=>{dispatch(decrementToBasketItem({id:item?.id}))}}
                    className=" text-sm font-bold bg-[#f3f4f6] text-black px-4 py-2 rounded-md"
                  >
                    -
                  </button>
                  <div className="text-lg font-bold">{item?.quantity}</div>
                  <button
                    onClick={() => {
                      dispatch(incrementToBasketItem({ id: item?.id }));
                    }}
                    className="text-sm font-bold bg-[#f3f4f6] text-black px-4 py-2 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="w-70">no items added to cart</h2>
        )}
      </div>
    </div>
  );
};

export default ProductPurchaseCountdownCard;
