import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleCategory("Avengers");
  }, []);

  const handleCategory = (category) => {
    const url = `https://toy-marketplace-server-side-ochre.vercel.app/toys/${category}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  return (
    <div className="my-14">
      <div className="text-center my-6">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-yellow-500 text-transparent bg-clip-text mt-12 mb-4">
          Explore All Action figure Toys By Category
        </h2>
        <p>Discover Unique Toys Tailored to Your Child's Interests</p>
      </div>
      <Tabs>
        <TabList className="mx-auto text-center  border-b border-orange ">
          <Tab onClick={() => handleCategory("Avengers")}>
            <span className="btn btn-outline btn-error">Avengers</span>
          </Tab>
          <Tab onClick={() => handleCategory("DC Comics")}>
            <span className="btn btn-outline btn-error">DC Comics</span>
          </Tab>
          <Tab onClick={() => handleCategory("Transformers")}>
            <span className="btn btn-outline btn-error">Transformers</span>
          </Tab>
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
