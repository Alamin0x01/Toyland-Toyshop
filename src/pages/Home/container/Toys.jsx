import Toy from "../components/Toy";
const Toys = ({ toys }) => {
  return (
    <div className="toygrid">
      {toys?.map((toy) => (
        <Toy key={toy?._id} toy={toy} />
      ))}
    </div>
  );
};

export default Toys;
