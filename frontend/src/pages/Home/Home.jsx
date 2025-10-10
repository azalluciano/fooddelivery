import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Footer />
    </div>
  );
};

export default Home;
