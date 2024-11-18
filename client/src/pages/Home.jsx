import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LocationList from "../components/LocationList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <LocationList />
      <Footer />
    </div>
  );
};

export default Home;
