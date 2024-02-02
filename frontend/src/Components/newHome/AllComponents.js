import React from "react";
import NewHome from "./NewHome";
import Blocks from "./Blocks";
import Features from "./Features";
import Price from "./Price";
import Contact from "./Contact";
import NavigationBar from "../nav/navbar";


function AllComponents() {
  return (
    <div>
      <NavigationBar />
      <NewHome />
      <Blocks />
      <Features />
      <Price />
      <Contact />
      
    </div>
  );
}

export default AllComponents;
