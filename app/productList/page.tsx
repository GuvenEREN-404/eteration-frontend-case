"use client";
import React, { useState } from "react";
import Card from "../components/Card";
import ProductPurchaseCountdownCard from "../components/checkoutCards/ProductPurchaseCountdownCard";
import CheckoutCard from "../components/checkoutCards/CheckoutCard";
import FilteredCard from "../components/filterCards/FilteredCard";

type Props = {};

const page = (props: Props) => {

  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 justify-center items-start">
   
    <div className="hidden lg:flex lg:flex-col gap-4">
     <FilteredCard/>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  
    <div className="hidden lg:flex lg:flex-col gap-4">
      <ProductPurchaseCountdownCard/>
      <CheckoutCard/>
    </div>
  </div>
  
  );
};

export default page;
