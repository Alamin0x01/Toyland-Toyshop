import { Label, TextInput, Button, Alert } from "flowbite-react";

import useTitle from "../../hooks/useTitle";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateToy = () => {
  useTitle("Update Toys");
  const [error, setError] = useState("");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const data = useLoaderData();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const url = e.target.url.value;
    const discription = e.target.discription.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const rating = e.target.rating.value;
    const cetagory = e.target.cetagory.value;

    if (rating > 5) {
      setError("Rating must be 5 or less");
      return;
    }

    const toy = {
      picture_url: url,
      name: title,
      sub_category: cetagory,
      price: price,
      rating: rating,
      quantity: quantity,
      description: discription,
    };

    try {
      setError("");

      const response = await fetch(
        `https://fan-vault-toys-server.vercel.app/mytoys/${data?._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(toy),
        }
      );

      const result = await response.json();
      console.log(result);
      if (result.matchedCount > 0) {
        MySwal.fire({
          title: <strong>Successfully Updated!</strong>,
          icon: "success",
        });
        navigate("/mytoys");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="max-w-lg px-4 mx-auto py-4 flex min-h justify-center items-center flex-col gap-4">
      <h2 className="font-bold text-2xl ">Add a Toy</h2>
      {error && (
        <Alert color="failure">
          <span>
            <span className="font-medium">{error}</span>
          </span>
        </Alert>
      )}
      <form
        id="addform"
        onSubmit={handleUpdate}
        className="flex flex-col gap-4 w-full"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="url" value="Photo URL" />
          </div>
          <TextInput
            name="url"
            id="url"
            type="text"
            required={true}
            shadow={true}
            defaultValue={data?.picture_url}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput
            name="title"
            id="title"
            type="text"
            required={true}
            shadow={true}
            defaultValue={data?.name}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="discription" value="Discription" />
          </div>
          <TextInput
            name="discription"
            id="name"
            type="text"
            required={true}
            shadow={true}
            defaultValue={data?.description}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput
            name="price"
            id="price"
            type="number"
            required={true}
            shadow={true}
            defaultValue={data?.price}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="quantity" value="Quantity" />
          </div>
          <TextInput
            name="quantity"
            id="quantity"
            type="number"
            required={true}
            shadow={true}
            defaultValue={data?.quantity}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="rating" value="Rating" />
          </div>
          <TextInput
            name="rating"
            id="rating"
            type="number"
            required={true}
            shadow={true}
            defaultValue={data?.rating}
          />
        </div>

        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Select an Cetagory
          </label>
          <select
            id="countries"
            name="cetagory"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            defaultValue={data?.cetagory}
          >
            <option value="dc">DC Comice</option>
            <option value="marvel">Marvel</option>
            <option value="starwars">Star Wars</option>
            <option value="transformers">Transformers</option>
          </select>
        </div>
        <Button type="submit">Update Toy</Button>
      </form>
    </div>
  );
};

export default UpdateToy;
