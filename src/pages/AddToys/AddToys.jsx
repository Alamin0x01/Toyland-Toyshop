import { Label, TextInput, Button, Alert } from "flowbite-react";

import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const AddToys = () => {
  useTitle("Add Toys");
  const { user } = useAuth();
  const [error, setError] = useState("");

  const MySwal = withReactContent(Swal);

  const handleAdd = async (e) => {
    e.preventDefault();

    const url = e.target.url.value;
    const title = e.target.title.value;
    const discription = e.target.discription.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const rating = e.target.rating.value;
    const cetagory = e.target.cetagory.value;
    const username = e.target.username.value;
    const useremail = e.target.useremail.value;

    if (rating > 5) {
      setError("Rating must be 5 or less");
      return;
    }

    const toy = {
      uid: user?.uid,
      picture_url: url,
      name: title,
      sub_category: cetagory,
      price: price,
      rating: rating,
      quantity: quantity,
      description: discription,
      email: useremail,
      username: username,
    };

    try {
      setError("");

      const response = await fetch(
        "https://toy-marketplace-server-side-alamin0x01.vercel.app/toys",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(toy),
        }
      );

      const result = await response.json();
      if (result.acknowledged) {
        MySwal.fire({
          title: <strong>Successfully Added!</strong>,
          icon: "success",
        });
        document.getElementById("addform").reset();
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
        onSubmit={handleAdd}
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
          >
            <option value="dc">DC Comice</option>
            <option value="marvel">Marvel</option>
            <option value="starwars">Star Wars</option>
            <option value="transformers">Transformers</option>
          </select>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="User Name" />
          </div>
          <TextInput
            name="photo"
            id="username"
            type="text"
            disabled
            required={true}
            shadow={true}
            value={user?.displayName}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="useremail" value="User Email" />
          </div>
          <TextInput
            name="photo"
            id="useremail"
            type="text"
            disabled
            required={true}
            shadow={true}
            value={user?.email}
          />
        </div>
        <Button type="submit">Add Toy</Button>
      </form>
    </div>
  );
};

export default AddToys;
