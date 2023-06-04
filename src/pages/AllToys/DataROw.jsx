import React from "react";
import { Link } from "react-router-dom";

const DataROw = ({ toy, number }) => {
  const { name, sellerName, category, price, availableQuantity, _id } = toy;
  return (
    <tbody>
      <tr>
        <th>{number + 1}</th>
        <td>{name}</td>
        <td>{toy?.sellerName}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{availableQuantity}</td>
        <td>
          <Link
            className="bg-pink-400 text-white p-2 rounded-lg cursor-pointer font-bold hover:text-black"
            to={`/toyDetails/${_id}`}
          >
            View Details
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default DataROw;
