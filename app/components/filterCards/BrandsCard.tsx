"use client";
import { filterBrandProduct } from "@/app/_redux/features/product-slice";
import { RootState } from "@/app/_redux/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface BrandsCardProps {
  onSelectBrand: (brand: string[]) => void;
}

const BrandsCard: React.FC<BrandsCardProps> = ({ onSelectBrand }) => {
  const router = useRouter();
  const brands: string[] = useSelector(
    (state: RootState) => state.productReducer.brands
  );
  const [searchText, setSearchText] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const dispatch = useDispatch();

  const filteredBrands = brands?.filter((brand) =>
    brand.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleBrandToggle = (brand: string) => {
    router.push('/')
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
    onSelectBrand(updatedBrands);

    dispatch(filterBrandProduct({ brand: updatedBrands }));
  };

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2>Brands</h2>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full h-8 mb-4"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="form-control max-h-[205px] overflow-y-auto">
          {filteredBrands.map((brand, index) => (
            <label key={index} className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
              />
              <span className="label-text">{brand}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
