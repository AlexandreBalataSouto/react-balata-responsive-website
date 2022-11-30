import React from "react";
import "./VideoCover.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const VideoCover = () => {
  return (
    <section className="VideoCover">
      <video autoPlay muted loop className="VideoCover_video">
        <source
          src={process.env.PUBLIC_URL + "/assets/videos/video-1.mp4"}
          type="video/mp4"
        />
      </video>
      <div className="VideoCover_title">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="VideoCover_title_buttons">
          <button>GET STARTED</button>
          <button>
            WATCH TRAILER <FontAwesomeIcon icon={faCirclePlay} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoCover;
