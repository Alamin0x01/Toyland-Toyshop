import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../Hook/useTitle";

const AddAToy = () => {
  useTitle("Add A Toy");
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleAddingToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const pictureUrl = form.pictureURL.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.quantity.value;
    const description = form.description.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const newToy = {
      name,
      pictureUrl,
      category,
      price,
      rating,
      availableQuantity,
      description,
      sellerName,
      sellerEmail,
    };
    // console.log(name, pictureURL, category, price, rating, description, sellerName, sellerEmail);
    console.log(newToy);

    fetch("https://toy-marketplace-server-side-ochre.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Your Toy Added");
        }
        form.reset();
      });
  };
  return (
    <div className="space-y-4 lg:mx-28 my-14">
      <form onSubmit={handleAddingToy}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Picture URL</span>
          </label>
          <input
            type="text"
            name="pictureURL"
            placeholder="Picture URL"
            className="input input-bordered"
          />
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-x-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select required name="category" className="input input-bordered">
              <option value="">Select category</option>
              <option value="Avengers">Avengers</option>
              <option value="DC Comics">DC Comics</option>
              <option value="Transformers">Transformers</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="number"
              required
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-x-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Input Rating 0-5"
              min="0"
              max="5"
              step="0.1"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity:</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description:</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered"
          />
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-x-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              placeholder="Seller name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller email</span>
            </label>
            <input
              type="text"
              name="sellerEmail"
              required
              defaultValue={user?.email}
              placeholder="Seller email"
              className="input input-bordered"
            />
          </div>
        </div>
        <button className="btn bg-orange w-full border-0 font-bold text-xl my-6">
          Add Toy
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddAToy;
