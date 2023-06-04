import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Category from "./Tab/Category";
import useTitle from "../../Hook/useTitle";
import Discount from "./Discount";
import Process from "./Process";
import Newsletter from "./Newsletter";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      {/* <Gallery /> */}
      <Category />
      {/* <Discount /> */}
      {/* <Newsletter /> */}
      {/* <Process /> */}
    </div>
  );
};

export default Home;
