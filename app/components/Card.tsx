import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="card w-70 bg-base-100 shadow-xl items-center">
      <Link href={{
        pathname:'/productDetail',
        query:{image,name,price,description}
      }}>
   
      <figure>
        <img
          src={`${image}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{price}</h2>
        <p>{name}</p>
      </div>
      </Link>
    <button onClick={()=>{console.log('selam gitme biryere')}} className="btn btn-primary mb-5">Add to Card</button>
    </div>
  );
};

export default Card;
