"use client";
import React, { useState } from "react";

type Props = {};

const ProductPurchaseCountdownCard = (props: Props) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount: number) => prevCount - 1);
    }
  };
  return (
    <div className="card w-72 bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2>Cart</h2>

        <div className="flex flex-row items-center justify-around">
          <div>
            <h1>ıphone</h1>
            <p className="text-[#2A59FE]">5000</p>
          </div>

          <div className="flex flex-row gap-2 ">
            <button
              onClick={decrementCount}
              className=" text-sm font-bold bg-[#f3f4f6] text-black px-4 py-2 rounded-md"
            >
              -
            </button>
            <div className="text-lg font-bold">{count}</div>
            <button
              onClick={incrementCount}
              className="text-sm font-bold bg-[#f3f4f6] text-black px-4 py-2 rounded-md"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPurchaseCountdownCard;
