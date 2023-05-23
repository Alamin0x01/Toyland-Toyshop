import { Table, Spinner } from "flowbite-react";
import useTitle from "../../hooks/useTitle";
import useMyToys from "../../hooks/useMyToys";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import { useState } from "react";

const MyToys = () => {
  useTitle("My Toys");

  const [sort, setSort] = useState("");
  const [toys, setToys] = useMyToys(sort);

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const call = async () => {
            const response = await fetch(
              `https://fan-vault-toys-server.vercel.app/mytoys/${id}`,
              {
                method: "DELETE",
              }
            );

            const result = await response.json();

            if (result.deletedCount > 0) {
              setToys((prev) => prev.filter((item) => item._id !== id));
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          };
          call();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {toys?.length > 0 ? (
        <>
          <div className="flex justify-end py-4">
            <select
              id="countries"
              name="cetagory"
              onChange={(e) => setSort(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-fit cursor-pointer"
            >
              <option value="">Sort by name</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className="overflow-auto">
            <Table striped={true}>
              <Table.Head>
                <Table.HeadCell>Toy name</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Quantity</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>

                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Delete</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {toys ? (
                  toys?.map((toy) => (
                    <MyToyRow
                      handleDelete={handleDelete}
                      key={toy?._id}
                      toy={toy}
                    />
                  ))
                ) : (
                  <Spinner
                    className="mx-auto py-4 w-fit"
                    color="info"
                    aria-label="Info spinner example"
                  />
                )}
              </Table.Body>
            </Table>
          </div>
        </>
      ) : (
        <h3 className="font-bold text-3xl text-center my-4 text-slate-700">
          There are no toy available
        </h3>
      )}
    </div>
  );
};

export default MyToys;
