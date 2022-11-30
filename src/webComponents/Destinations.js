import React from "react";
import "./Destinations.css";
import Card from "./Card";
import { data } from "../data.js";

const Destinations = () => {
  return (
    <section className="Destinations">
      <div className="Destinations_title">
        <h1>Check out these EPIC Destinations!</h1>
      </div>
      <div className="Destinations_cards">
        {data.map((item) => {
          return <Card key={item.id} {...item}></Card>;
        })}
      </div>
    </section>
  );
};

export default Destinations;
