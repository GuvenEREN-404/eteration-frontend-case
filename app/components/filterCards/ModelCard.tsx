import React, { useState } from "react";

interface ModelCardProps {
  selectedBrands: string[];
}

const ModelCard: React.FC<ModelCardProps> = ({ selectedBrands }) => {
  const models: Record<string, string[]> = {
    iPhone: ["iPhone 11", "iPhone 12", "iPhone SE"],
    Samsung: ["Galaxy S21", "Galaxy S20", "Galaxy Note 20"],
    Xiaomi: ["Mi 10", "Redmi Note 9", "POCO X3"],
  };

  const selectedModels = selectedBrands.flatMap((brand) => models[brand]);

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2>Models</h2>
        {selectedModels.length > 0 ? (
          <div className="form-control max-h-[205px] overflow-y-auto">
            {selectedModels.map((model, index) => (
              <label key={index} className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-primary" />
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
