import React from "react";
import Link from "next/link";
import { addToBasket } from "../_redux/features/basket-slice";
import { useDispatch } from "react-redux";

interface Product {
  id: string;
  brand: string;
  description: string;
  image: string;
  model: string;
  name: string;
  price: string;
}
type Props = {
  product: Product;
};

const Card = (props: Props) => {
  const dispatch = useDispatch();
  const { description, image, name, price, id, brand, model } = props.product;

  return (
    <div className="card w-70 bg-base-100 shadow-xl items-center">
      <Link
        href={{
          pathname: "/productDetail",
          query: { image, name, price, description, brand, model },
        }}
      >
        <figure>
          <img src={`${image}`} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{price}</h2>
          <p>{name}</p>
        </div>
      </Link>
      <button
        onClick={() => {
          dispatch(addToBasket({ product: props.product, id: id }));
        }}
        className="btn btn-primary mb-5"
      >
        Add to Card
      </button>
    </div>
  );
};

export default Card;
