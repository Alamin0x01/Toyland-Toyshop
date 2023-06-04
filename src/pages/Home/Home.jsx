import React from "react";
import Banner from "./Banner";
import useTitle from "../../Hook/useTitle";
import BestSale from "./BestSale";
import Feedbacks from "./Feedbacks";
import Gallery from "./Gallery";
import Category from "./Tab/Category";
import ContactUs from "./ContactUs";

const Home = () => {
  useTitle("Home");
  return (
    <div className="bg-valentine-50">
      <Banner></Banner>
      <Category></Category>
      <Gallery></Gallery>
      <BestSale></BestSale>
      <Feedbacks></Feedbacks>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
