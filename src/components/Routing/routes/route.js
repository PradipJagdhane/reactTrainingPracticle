import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import NoPage from "../pages/notfound";
import NavLink from "../navlinks/navbar";

const RouteLinks = () => {
  return (
    <div>
        <NavLink />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </div>
  );
};

export default RouteLinks;
