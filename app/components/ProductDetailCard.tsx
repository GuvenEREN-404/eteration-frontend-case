import React from 'react'

type Props = {}

const ProductDetailCard = (props: Props) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">iPhone 11 Pro Max</h2>
          <p className="text-[#2A59FE]">5.000 ₺</p>
          <p className=" max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            augue magna, laoreet ac consectetur et, luctus sit amet erat.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla facilisi. Suspendisse egestas maximus
            eleifend. Donec lectus ex, commodo id tristique eu, convallis nec
            est. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean in consectetur dolor. In
            porttitor risus vel nisl fringilla egestas. Praesent id enim dolor.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
  )
}

export default ProductDetailCard