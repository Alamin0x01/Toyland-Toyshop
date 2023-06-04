import React from "react";
import Banner from "./Banner";
import Category from "./Tab/Category";
import useTitle from "../../Hook/useTitle";
import BestSale from "./BestSale";
import Feedbacks from "./Feedbacks";

const Home = () => {
  useTitle("Home");
  return (
    <div className="bg-valentine-50">
      <Banner />
      <Category />
      <BestSale></BestSale>
      <Feedbacks></Feedbacks>
    </div>
  );
};

export default Home;
