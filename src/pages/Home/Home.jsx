import React from "react";
import Banner from "./Banner";

import Category from "./Tab/Category";
import useTitle from "../../Hook/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />

      <Category />
    </div>
  );
};

export default Home;
