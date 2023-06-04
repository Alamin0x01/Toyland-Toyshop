import React from "react";
import Swal from "sweetalert2";

const UpdateModal = ({ selectedId, setSelectedId }) => {
  const handleToyUpdate = (event, _id) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const availableQuantity = form.quantity.value;
    const description = form.description.value;
    const updatedToy = {
      price,
      availableQuantity,
      description,
    };
    console.log(updatedToy);
    console.log(selectedId);

    if (selectedId) {
      fetch(
        `https://toy-marketplace-server-side-ochre.vercel.app/toys/${selectedId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedToy),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "success",
              text: "Coffee added successfully!",
              icon: "success",
              confirmButtonText: "Cool",
            });
            setSelectedId(null);
          }
          form.reset();
        });
    }
  };
  return (
    <div>
      {/* modal */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleToyUpdate}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                required
                type="number"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity:</span>
              </label>
              <input
                type="number"
                required
                name="quantity"
                placeholder="Available quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <input
                type="text"
                required
                name="description"
                placeholder="Description"
                className="input input-bordered"
              />
            </div>
            <input
              className="btn bg-orange border-0 w-full my-4"
              type="submit"
              value="Update"
            />
            {/* <button className='btn bg-orange w-full mt-6 border-0'>Update</button> */}
          </form>
        </label>
      </label>
    </div>
  );
};

export default UpdateModal;
