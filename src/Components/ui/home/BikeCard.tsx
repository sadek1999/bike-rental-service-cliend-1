import React from "react";
import Button1 from "../Button1";

const BikeCard = ({ bike }: { bike: any }) => {
  return (
    <div className="card bg-white shadow-md border border-gray-200 w-96">
      <figure>
        <img
          src={bike.img}
          alt={bike.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">{bike.name}</h2>
        <p className="text-sm">
          <strong>Brand:</strong> {bike.brand}
        </p>
        <p className="text-sm">
          <strong>Model:</strong> {bike.model}
        </p>
        <p className="text-sm">
          <strong>Price/Hour:</strong> ${bike.pricePerHour}
        </p>
        <div className="card-actions mt-4">
          <Button1 name="View More" link="'"></Button1>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
