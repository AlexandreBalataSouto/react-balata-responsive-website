import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./webComponents/Navbar";
import Home from "./webComponents/Pages/Home";
import SignUp from "./webComponents/Pages/SignUp";
import Services from "./webComponents/Pages/Services";
import Products from "./webComponents/Pages/Products";
import NotFound from "./webComponents/Pages/NotFound";

const App = () => {
  return (
    <main className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
};

export default App;
