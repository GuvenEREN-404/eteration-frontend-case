import { filterProduct } from "@/app/_redux/features/product-slice";
import { RootState } from "@/app/_redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const FilterCard = (props: Props) => {
  const dispatch = useDispatch();
  const allProducts: any = useSelector(
    (state: RootState) => state.productReducer.allProducts
  );

  const handleSortByDateOldToNew = () => {
    const sortedProducts: any = [...allProducts].sort(
      //@ts-ignore
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    dispatch(filterProduct(sortedProducts));
  };

  const handleSortByDateNewToOld = () => {
    const sortedProducts: any = [...allProducts].sort(
       //@ts-ignore
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    dispatch(filterProduct(sortedProducts));
  };

  const handleSortByPriceLowToHigh = () => {
    const sortedProducts: any = [...allProducts].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    dispatch(filterProduct(sortedProducts));
  };

  const handleSortByPriceHighToLow = () => {
    const sortedProducts: any = [...allProducts].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    dispatch(filterProduct(sortedProducts));
  };

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2>Sort By</h2>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              onClick={() => {
                handleSortByDateOldToNew();
              }}
              type="radio"
              name="radio-10"
              className="radio checked:bg-[#2A59FE]"
            />
            <span className="label-text">Old to new</span>
          </label>
          <label className="label cursor-pointer">
            <input
              onClick={() => {
                handleSortByDateNewToOld();
              }}
              type="radio"
              name="radio-10"
              className="radio checked:bg-[#2A59FE]"
            />
            <span className="label-text">New to old</span>
          </label>
          <label className="label cursor-pointer">
            <input
              onClick={() => {
                handleSortByPriceHighToLow();
              }}
              type="radio"
              name="radio-10"
              className="radio checked:bg-[#2A59FE]"
            />
            <span className="label-text">Price hight to low</span>
          </label>
          <label className="label cursor-pointer">
            <input
              onClick={() => {
                handleSortByPriceLowToHigh();
              }}
              type="radio"
              name="radio-10"
              className="radio checked:bg-[#2A59FE]"
            />
            <span className="label-text">Price low to High</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
