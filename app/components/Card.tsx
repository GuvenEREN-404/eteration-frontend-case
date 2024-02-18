import React from "react";
import { useRouter } from "next/navigation";

interface Product {
  id?: string;
  brand?: string;
  description?:string;
  image?:string;
  model?:string;
  name?:string;
  price?:string;
}
type Props = {
  product:Product
};

const Card = (props: Props) => {
  const router = useRouter();
  const {id, brand, model, description, image, name, price} = props.product
  return (
    <div
      onClick={() => {
        router.push("/productDetail");
      }}
      className="card w-70 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src={`${image}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{price}</h2>
        <p>{name}</p>

        <button className="btn btn-primary">Add to Card</button>
      </div>
    </div>
  );
};

export default Card;
