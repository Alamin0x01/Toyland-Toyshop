import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TabCard = ({ category }) => {
  const { name, pictureUrl, price, rating, _id } = category;
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    toast("You have to log in first! Then view details"); // Display the toast message
    window.location.href = `/toyDetails/${_id}`;
  };

  return (
    <div>
      <div className="card bg-base-100 h-full shadow-xl">
        <figure className="px-10 pt-10">
          <img src={pictureUrl} alt="Super Toys" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">Price: {price}</p>
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

            <div className="card-actions">
              {user ? (
                <Link
                  className="btn bg-rose-400 border-0"
                  to={`/toyDetails/${_id}`}
                >
                  View Details
                </Link>
              ) : (
                <button
                  className="btn bg-rose-400 border-0"
                  onClick={handleViewDetails}
                >
                  View Details
                </button>
              )}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
