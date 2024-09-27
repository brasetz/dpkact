import React from "react";
import Hero from "../Components/Hero";
import Campaigns from "../Components/Campaigns";
import Steps from "../Components/Steps";
import Features from "../Components/Features";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <Campaigns />
      <Steps />
    </div>
  );
};

export default Home;
