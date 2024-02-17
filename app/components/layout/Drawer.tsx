import React from "react";
import ProductPurchaseCountdownCard from "../checkoutCards/ProductPurchaseCountdownCard";
import CheckoutCard from "../checkoutCards/CheckoutCard";
import FilteredCard from "../filterCards/FilteredCard";

type Props = {};

const Drawer = (props: Props) => {
  return (
    <div className="lg:hidden drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-4">
          {/* Sidebar content here */}

          <FilteredCard />
          <ProductPurchaseCountdownCard />
          <CheckoutCard />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
