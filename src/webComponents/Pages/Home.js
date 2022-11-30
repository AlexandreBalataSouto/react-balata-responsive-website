import React from "react";
import "./Home.css";
import VideoCover from "../VideoCover";
import Destinations from "../Destinations";
import Footer from "../Footer";

const Home = () => {
  return (
    <section className="Home">
      <VideoCover></VideoCover>
      <Destinations></Destinations>
      <Footer></Footer>
    </section>
  );
};

export default Home;
