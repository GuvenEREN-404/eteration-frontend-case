import React from "react";
import { useRouter } from "next/navigation";
type Props = {};

const Card = (props: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/productDetail");
      }}
      className="card w-70 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">15.000</h2>
        <p>iPhone 13 Pro Max 256Gb</p>

        <button className="btn btn-primary">Add to Card</button>
      </div>
    </div>
  );
};

export default Card;
