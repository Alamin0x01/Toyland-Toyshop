import useTitle from "../../hooks/useTitle";
import Gallary from "./container/Gallary";
import Header from "./container/Header";
import ToysCetagories from "./container/ToysCetagories";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <Gallary />
      <ToysCetagories />
    </>
  );
};

export default Home;
