import React, { useEffect, useState } from "react";
import { RootState } from "@/app/_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { filterModelProduct } from "@/app/_redux/features/product-slice";

interface ModelCardProps {
  selectedBrands: string[];
}

const ModelCard: React.FC<ModelCardProps> = ({ selectedBrands }) => {
  const dispatch = useDispatch();
  const models: Record<string, string[]> = useSelector(
    (state: RootState) => state.productReducer.models
  );
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const selectedModelsList = selectedBrands.flatMap(
    (brand: any) => models[brand] || []
  );
  console.log("seçilen modeller", selectedBrands);

  const handleModelsToggle = (model: string) => {
    const updatedModels = selectedModels.includes(model)
      ? selectedModels.filter((selectedModels) => selectedModels !== model)
      : [...selectedModels, model];

    setSelectedModels(updatedModels);

    console.log("handleModelsToggle gelen", updatedModels);

    dispatch(filterModelProduct({model:updatedModels,brand:selectedBrands}))
  };
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2>Models</h2>
        {selectedModelsList.length > 0 ? (
          <div className="form-control max-h-[205px] overflow-y-auto">
            {selectedModelsList.map((model, index) => (
              <label key={index} className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={selectedModels.includes(model)}
                  onChange={() => handleModelsToggle(model)}
                />
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
