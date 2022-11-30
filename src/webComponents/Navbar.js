import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isNavbarBurgerDisplay, setIsNavbarBurgerDisplay] = useState(false);

  function checkSize() {
    if (window.innerWidth > 766) {
      setIsNavbarBurgerDisplay(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      //Cleanup function
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <>
      <section className="Navbar">
        <div className="Navbar_icon">
          <Link to={"/"} onClick={() => setIsNavbarBurgerDisplay(false)}>
            ABS <FontAwesomeIcon icon={faCoffee} />
          </Link>
        </div>
        <div className="Navbar_buttons">
          <ul>
            <Link to={"/"} className="Navbar_buttons-link">
              <li>Home</li>
            </Link>
            <Link to={"/services"} className="Navbar_buttons-link">
              <li>Services</li>
            </Link>
            <Link to={"/products"} className="Navbar_buttons-link">
              <li>Products</li>
            </Link>
            <Link to={"/signUp"} className="Navbar_buttons-sign">
              <li>SIGN UP</li>
            </Link>
          </ul>
        </div>
        <div className="Navbar_buttons-burger">
          {!isNavbarBurgerDisplay ? (
            <FontAwesomeIcon
              icon={faBars}
              className="faBars"
              onClick={() => setIsNavbarBurgerDisplay(!isNavbarBurgerDisplay)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faXmark}
              className="faXmark"
              onClick={() => setIsNavbarBurgerDisplay(!isNavbarBurgerDisplay)}
            />
          )}
        </div>
      </section>
      <section
        className={
          !isNavbarBurgerDisplay ? "Navbar-burger" : "Navbar-burger active"
        }
      >
        <div className="Navbar_buttons-burger_buttons">
          <ul>
            <Link
              to={"/"}
              className="Navbar_buttons-link"
              onClick={() => setIsNavbarBurgerDisplay(false)}
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/services"}
              className="Navbar_buttons-link"
              onClick={() => setIsNavbarBurgerDisplay(false)}
            >
              <li>Services</li>
            </Link>
            <Link
              to={"/products"}
              className="Navbar_buttons-link"
              onClick={() => setIsNavbarBurgerDisplay(false)}
            >
              <li>Products</li>
            </Link>
            <Link
              to={"/signUp"}
              className="Navbar_buttons-sign"
              onClick={() => setIsNavbarBurgerDisplay(false)}
            >
              <li>SIGN UP</li>
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
