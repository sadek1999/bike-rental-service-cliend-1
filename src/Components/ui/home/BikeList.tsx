import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllBikesQuery } from "../../../redux/features/bike/bikeApi";
import BikeCard from "./BikeCard";

const BikeList = () => {
  const { data: bikes, isLoading, isError } = useGetAllBikesQuery(undefined); // Fetch bikes
  const navigate = useNavigate();

  const handleViewDetails = (id: string) => {
    navigate(`/bike/${id}`);
  };

  if (isLoading) {
    return <p>Loading bikes...</p>;
  }

  if (isError) {
    return <p>Failed to load bikes. Please try again later.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {bikes?.data.map((bike: any) => (
        // <div
        //   key={bike._id}
        //   className="card shadow-md border border-gray-300"
        //   style={{ backgroundColor: "#dcf6b3" }} // Secondary color as card background
        // >
        //   <figure>
        //     <img
        //       src={bike.img} // Placeholder for bike image
        //       alt={bike.name}
        //       className="w-full h-48 object-cover"
        //       style={{ borderBottom: `5px solid #9ce528` }} // Primary color for styling
        //     />
        //   </figure>
        //   <div className="card-body">
        //     <h2
        //       className="card-title text-lg font-bold"
        //       style={{ color: "#9ce528" }} // Primary color for title
        //     >
        //       {bike.name}
        //     </h2>
        //     <p>
        //       <strong>Model:</strong> {bike.model}
        //     </p>
        //     <p>
        //       <strong>CC:</strong> {bike.cc}
        //     </p>
        //     <p>
        //       <strong>Year:</strong> {bike.year}
        //     </p>
        //     <p>
        //       <strong>Price per hour:</strong> ${bike.pricePerHour}
        //     </p>
        //     <p
        //       className={`font-semibold ${
        //         bike.isAvailable ? "text-green-500" : "text-red-500"
        //       }`}
        //     >
        //       {bike.isAvailable ? "Available" : "Not Available"}
        //     </p>
        //     <div className="card-actions justify-end">
        //       <button
        //         className="btn"
        //         style={{
        //           backgroundColor: bike.isAvailable ? "#9ce528" : "#cccccc",
        //           color: bike.isAvailable ? "white" : "#666666",
        //           borderColor: bike.isAvailable ? "#9ce528" : "#cccccc",
        //         }}
        //         onClick={() => handleViewDetails(bike._id)}
        //         disabled={!bike.isAvailable}
        //       >
        //         View Detail
        //       </button>
        //     </div>
        //   </div>
        // </div>
        <BikeCard bike={bike}></BikeCard>
      ))}
    </div>
  );
};

export default BikeList;
