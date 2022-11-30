import React from "react";
import "./Card.css";

const Card = ({ id, img, tag, info }) => {
  return (
    <section className="Card">
      <div className="Card_img_container">
        <img src={`${process.env.PUBLIC_URL}${img}`} alt={`img-${id}`} />
      </div>
      <span className="Card_tag">{tag}</span>
      <div className="Card_info">
        <p>{info}</p>
      </div>
    </section>
  );
};

export default Card;
