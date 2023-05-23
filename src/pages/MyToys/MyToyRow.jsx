import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const MyToyRow = ({ toy, handleDelete }) => {
  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {toy?.name}
        </Table.Cell>
        <Table.Cell> {toy?.sub_category}</Table.Cell>
        <Table.Cell>{toy?.quantity}</Table.Cell>
        <Table.Cell>{toy?.price}</Table.Cell>
        <Table.Cell>
          <Link
            to={`/update/${toy._id}`}
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Edit
          </Link>
        </Table.Cell>
        <Table.Cell>
          <Link
            onClick={() => handleDelete(toy?._id)}
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Delete
          </Link>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default MyToyRow;
