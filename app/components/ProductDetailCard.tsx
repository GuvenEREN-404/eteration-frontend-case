'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react'

type Props = {}

const ProductDetailCard = (props: Props) => {
  const searchParams = useSearchParams();
  const image = searchParams.get('image')
  const name = searchParams.get('name')
  const price = searchParams.get('price')
  const description = searchParams.get('description')

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={`${image}`}
            alt="Product Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-[#2A59FE]">{price} ₺</p>
          <p className=" max-w-[400px]">
            {description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
  )
}

export default ProductDetailCard