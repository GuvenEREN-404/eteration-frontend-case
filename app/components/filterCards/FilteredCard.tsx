'use client'
import React, { useState } from "react";
import SortedCard from "./SortedCard";
import BrandsCard from "./BrandsCard";
import ModelCard from "./ModelCard";

type Props = {};

function FilteredCard({}: Props) {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleBrandSelect = (brands: string[]) => {
    setSelectedBrands(brands);
  };
  return (
    <>
      <SortedCard />
      <BrandsCard onSelectBrand={handleBrandSelect} />
      {selectedBrands.length > 0 && (
        <ModelCard selectedBrands={selectedBrands} />
      )}
    </>
  );
}

export default FilteredCard;
