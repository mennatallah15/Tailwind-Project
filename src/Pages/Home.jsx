import React from "react";
import Header from "../Components/Header";
import HeaderCards from "../Components/HeaderCards";
import TravelCategory from "../Components/TravelCategory";
import Deals_Offers from "../Components/Deals_Offers";
import Destination from "../Components/Destination";
import FeelTheVibe from "../Components/FeelTheVibe";
import AskForm from "../Components/AskForm";

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderCards />
      <TravelCategory />
      <Deals_Offers />
      <Destination />
      <FeelTheVibe />
      <AskForm />
    </div>
  );
};

export default Home;
