import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import useTitle from "../Hook/useTitle";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  useTitle("Details");
  const toy = useLoaderData();
  //   console.log(toy);
  const {
    name,
    pictureUrl,
    description,
    sellerEmail,
    sellerName,
    rating,
    price,
    availableQuantity,
  } = toy;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={pictureUrl} className="max-w-sm rounded-lg shadow-2xl " />
          <div className="lg:ms-8">
            <h1 className="text-5xl font-bold text-orange">{name}</h1>
            <p className="py-6 font-semibold">{description}</p>
            <div className="space-y-4">
              <p className="text-lg font-semibold">
                Available Quantity: {availableQuantity}
              </p>
              <p className="text-lg font-semibold">Seller Name: {sellerName}</p>
              <p className="text-lg font-semibold">
                Seller Email: {sellerEmail}
              </p>
              <p className="text-lg font-semibold">Price: ${price}</p>
              <p className="flex items-center font-bold">
                {rating}
                <Rating
                  className="ms-3 text-xl"
                  placeholderRating={rating}
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar className="text-yellow-300" />}
                  fullSymbol={<FaStar />}
                  readonly
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
