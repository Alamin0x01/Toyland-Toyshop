import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useToys from "../../../hooks/useToys";
import { useState } from "react";
import Toys from "./Toys";

const ToysCetagories = () => {
  const [cetagory, setCetagory] = useState("dc");

  const toys = useToys(0, 20, cetagory, "");

  return (
    <div id="explore" className="bg-[#Ffff]">
      <section className=" container mx-auto px-4 py-12">
        <div className="mx-auto w-fit  font-bold text-xl md:text-5xl text-[#EC0] px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">
          Shop by category
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab onClick={() => setCetagory("dc")}>DC Comices</Tab>
              <Tab onClick={() => setCetagory("marvel")}>Marvel</Tab>
              <Tab onClick={() => setCetagory("starwars")}>Star Wars</Tab>
              <Tab onClick={() => setCetagory("transformers")}>
                Transformers
              </Tab>
            </TabList>
            <TabPanel>
              <Toys toys={toys} />
            </TabPanel>
            <TabPanel>
              <Toys toys={toys} />
            </TabPanel>
            <TabPanel>
              <Toys toys={toys} />
            </TabPanel>
            <TabPanel>
              <Toys toys={toys} />
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default ToysCetagories;
