import React, { useContext, useEffect, useState } from "react";
import DataROw from "./DataROw";
import useTitle from "../../Hook/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const AllToys = () => {
  useTitle("All Toys");
  const { loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://toy-marketplace-server-side-ochre.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  if (loading) {
    return (
      <div className="mx-auto w-1/3 my-6">
        <progress className="progress"></progress>
      </div>
    );
  }

  const handleSearch = () => {
    fetch(
      `https://toy-marketplace-server-side-ochre.vercel.app/toysName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="my-14">
      <div className="flex justify-center my-4">
        <div className="form-control">
          <div className="input-group">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search by name"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square bg-orange">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          {toys.map((toy, index) => (
            <DataROw key={toy._id} toy={toy} number={index}></DataROw>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
