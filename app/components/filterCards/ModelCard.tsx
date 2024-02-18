import React, { useEffect } from "react";
import { RootState } from "@/app/_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "@/app/_redux/features/product-slice";

interface ModelCardProps {
  selectedBrands: string[];
}

const ModelCard: React.FC<ModelCardProps> = ({ selectedBrands }) => {
  const models: Record<string, string[]> = useSelector((state: RootState) => state.productReducer.models);
  const filteredProduct:any = useSelector((state: RootState) => state.productReducer.filterProduct);
 
  const dispatch = useDispatch();

  const selectedModels = selectedBrands.flatMap((brand: any) => models[brand] || []);

useEffect(() => {
  const filteredModels = selectedModels.filter((model) => {
    // Assuming that the model names are unique identifiers in the filteredProduct array
    return filteredProduct.some((product: any) => product.model === model);
  });
  console.log('selam',filteredModels)
}, [selectedBrands])
 
 
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2>Models</h2>
        {selectedModels.length > 0 ? (
          <div className="form-control max-h-[205px] overflow-y-auto">
            {selectedModels.map((model, index) => (
              <label key={index} className="label cursor-pointer">
                <input onClick={()=>{}} type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">{model}</span>
              </label>
            ))}
          </div>
        ) : (
          <p>No models selected.</p>
        )}
      </div>
    </div>
  );
};

export default ModelCard;
