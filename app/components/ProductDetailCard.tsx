"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../_redux/features/basket-slice";

type Props = {};
interface Product {
  id?: string | undefined | null;
  brand?: string | undefined | null;
  description?: string | undefined | null;
  image?: string | undefined | null;
  model?: string | undefined | null;
  name?: string | undefined | null;
  price?: string | undefined | null;
}
const ProductDetailCard = (props: Props) => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const description = searchParams.get("description");
  const id = searchParams.get("id");
  const brand = searchParams.get("brand");
  const model = searchParams.get("model");

  const productData: Product = {
    image: image ?? "",
    name: name ?? "",
    price: price ?? "",
    description: description ?? "",
    id: id ?? "",
    brand: brand ?? "",
    model: model ?? "",
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={`${productData.image}`} alt="Product Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productData?.name}</h2>
        <p className="text-[#2A59FE]">{productData?.price} ₺</p>
        <p className=" max-w-[400px]">{productData?.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              //@ts-ignore
              dispatch(addToBasket({ product: productData, id: id ?? "" }));
            }}
            className="btn btn-primary mb-5"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
