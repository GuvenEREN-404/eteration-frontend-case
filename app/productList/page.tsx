"use client";
import React, { useEffect } from "react";
import Card from "../components/Card";
import ProductPurchaseCountdownCard from "../components/checkoutCards/ProductPurchaseCountdownCard";
import CheckoutCard from "../components/checkoutCards/CheckoutCard";
import FilteredCard from "../components/filterCards/FilteredCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, filterProduct } from "../_redux/features/product-slice";
import { RootState } from "../_redux/store";

type Props = {};
interface Product {
  id?: string;
  brand?: string;
  description?:string;
  image?:string;
  model?:string;
  name?:string;
  price?:string;
}
const page = (props: Props) => {
  const dispatch = useDispatch();
  const allProducts:Product[] = useSelector((state: RootState) => state.productReducer.allProducts);
  const filterProduct:any = useSelector((state: RootState) => state.productReducer.filterProduct);
  const filteredProductsArray = filterProduct.flatMap((innerArray:any) => innerArray);

  useEffect(() => {
    // Sayfa yüklendiğinde veya gerekli bir durum değiştiğinde ürünleri çek
    dispatch(fetchProducts());
  }, [dispatch]);
console.log('all product',filterProduct)
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 justify-center items-start">
   
    <div className="hidden lg:flex lg:flex-col gap-4">
     <FilteredCard/>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {filteredProductsArray.length > 0 ? filteredProductsArray.map((item:Product,index:number)=>{
        return(
          <Card product={item}/>
        )
      })
      : 
      allProducts.map((item:Product,index:number)=>{
        return(
          <Card product={item}/>
        )
      })
    }
      
    </div>
  
    <div className="hidden lg:flex lg:flex-col gap-4">
      <ProductPurchaseCountdownCard/>
      <CheckoutCard/>
    </div>
  </div>
  
  );
};

export default page;
