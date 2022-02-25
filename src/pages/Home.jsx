import React from "react";
import Banner from "../components/Banner";
import Banner3 from "../components/Banner3";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import HomeProduct1 from "../components/HomeProduct1";
import HomeProduct2 from "../components/HomeProduct2";
import NewsLetter from "../components/NewsLetter";
import SmallBanner from "../components/SmallBanner";

import { ProductsContext } from "../context/ProductContext";

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <HomeProduct1 />
      <Banner />
      <HomeProduct2 />
      <SmallBanner />
      <Banner3 />
      <NewsLetter />
    </div>
  );
};

export default Home;
