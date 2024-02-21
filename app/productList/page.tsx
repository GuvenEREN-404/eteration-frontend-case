"use client";
import React, { useEffect } from "react";
import ProductPurchaseCountdownCard from "../components/checkoutCards/ProductPurchaseCountdownCard";
import CheckoutCard from "../components/checkoutCards/CheckoutCard";
import FilteredCard from "../components/filterCards/FilteredCard";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../_redux/features/product-slice";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Sayfa yüklendiğinde veya gerekli bir durum değiştiğinde ürünleri çek
    //@ts-ignore
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 justify-between items-start">
      <div className="hidden lg:flex lg:flex-col gap-4">
        <FilteredCard />
      </div>

      <ProductCard />

      <div className="hidden lg:flex lg:flex-col gap-4">
        <ProductPurchaseCountdownCard />
        <CheckoutCard />
      </div>
    </div>
  );
};

export default ProductList;
