import {
  sortByDateNewToOld,
  sortByDateOldToNew,
  sortByPriceHighToLow,
  sortByPriceLowToHigh,
} from "@/app/_redux/features/product-slice";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {};

const FilterCard = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2>Sort By</h2>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              onClick={() => {
                dispatch(sortByDateOldToNew());
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
                dispatch(sortByDateNewToOld());
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
                dispatch(sortByPriceHighToLow());
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
                dispatch(sortByPriceLowToHigh());
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
