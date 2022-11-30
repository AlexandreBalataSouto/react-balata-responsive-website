import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="Footer_newsletter">
        <h1>
          Join the Adventure newsletter to receive our best vacation deals
        </h1>
        <p>You can unsubscribe at any time</p>
        <div className="Footer_newsletter_input">
          <input type="text" placeholder="Your Email" />
          <button>Subcribe</button>
        </div>
      </div>
      <div className="Footer_lists">
        <ul>
          <li>About Us</li>
          <li>How it works</li>
          <li>Testimonials</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Term of Service</li>
        </ul>
        <ul>
          <li>Contact Us</li>
          <li>Contact</li>
          <li>Support</li>
          <li>Destinations</li>
          <li>Sponsorship</li>
        </ul>
        <ul>
          <li>Videos</li>
          <li>Submit Video</li>
          <li>Ambassadors</li>
          <li>Agency</li>
          <li>Influencer</li>
        </ul>
        <ul>
          <li>Social Media</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Youtube</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div className="Footer_credits">
        <div className="Footer_credits_logo">
          ABS <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div className="Footer_credits_copyright">
          ABS <FontAwesomeIcon icon={faCopyright} /> 2022
        </div>
        <div className="Footer_credits_icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-youtube"></i>
          <i className="fa fa-twitter"></i>
        </div>
      </div>
    </section>
  );
};

export default Footer;
