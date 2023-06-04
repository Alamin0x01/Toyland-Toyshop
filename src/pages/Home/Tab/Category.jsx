import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleCategory("Avengers"); // Load Avengers data by default
  }, []);

  const handleCategory = (category) => {
    const url = `http://localhost:5000/toys/${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  };

  return (
    <div className="my-14">
      <div className="text-center my-6">
        <h2 className="text-4xl font-bold text-center text-orange mt-12 mb-4">
          Toys Category
        </h2>
        <p className="text-2xl font-semibold">Buy Your Favorite Toy.</p>
      </div>
      <Tabs id="tabs" className="">
        <TabList className="mx-auto text-center border-b border-orange">
          <Tab onClick={() => handleCategory("Avengers")}>Avengers</Tab>
          <Tab onClick={() => handleCategory("DC Comics")}>DC Comics</Tab>
          <Tab onClick={() => handleCategory("Transformers")}>Transformers</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-6 px-4 lg:px-4">
            {categories.map((ctg) => (
              <TabCard key={ctg._id} category={ctg}></TabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4 px-4 lg:px-4">
            {categories.map((ctg) => (
              <TabCard key={ctg._id} category={ctg}></TabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4 px-4 lg:px-4">
            {categories.map((ctg) => (
              <TabCard key={ctg._id} category={ctg}></TabCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
