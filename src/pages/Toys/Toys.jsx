import { Table, Spinner } from "flowbite-react";
import useTitle from "../../hooks/useTitle";
import useToys from "../../hooks/useToys";
import useTotal from "../../hooks/useTotal";
import { useState } from "react";
import ToyRow from "./ToyRow";
import SearchBar from "./SearchBar";

const Toys = () => {
  useTitle("All Toys");

  const total = useTotal();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");

  const totalPage = Math.ceil(+total / limit);

  const toys = useToys(page, limit, "", search);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    setSearch(value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto py-4">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div>
        {toys ? (
          <>
            <div className="overflow-auto">
              <Table striped={true}>
                <Table.Head>
                  <Table.HeadCell>User name</Table.HeadCell>
                  <Table.HeadCell>Toy name</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Quantity</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">details</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {toys?.map((toy) => (
                    <ToyRow key={toy?._id} toy={toy} />
                  ))}
                </Table.Body>
              </Table>
            </div>
            <div>
              <div className="flex gap-4 flex-col items-center justify-center py-4">
                <div className="flex gap-3 text-center flex-wrap justify-center">
                  {[...Array(totalPage).keys()].map((_, index) => (
                    <button
                      onClick={() => setPage(index)}
                      className={`text-base border px-6 py-1 rounded-md  font-medium ${
                        page === index && "bg-[#f3a642]"
                      }`}
                      key={index}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div>
                  <select
                    onChange={(e) => setLimit(+e.target.value)}
                    className="cursor-pointer rounded-md px-6 py-1 border"
                    name="limit"
                    id=""
                  >
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-fit py-4 mx-auto">
            <Spinner color="info" aria-label="Info spinner example" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Toys;
