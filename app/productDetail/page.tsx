import React from "react";
import ProductDetailCard from "../components/ProductDetailCard";
import ProductPurchaseCountdownCard from "../components/checkoutCards/ProductPurchaseCountdownCard";
import CheckoutCard from "../components/checkoutCards/CheckoutCard";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 justify-center items-start">
     <ProductDetailCard/>
     <div className="hidden lg:flex lg:flex-col gap-4">
      <ProductPurchaseCountdownCard/>
      <CheckoutCard/>
    </div>
    </div>
  );
};

export default page;
