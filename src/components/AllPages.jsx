import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import Router from "../Router";

const AllPages = () => {
  return (
    <div className="w-[100%] overflow-x-hidden ">
      <Header Link={Link} />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Router />
      {/* <Footer /> */}
    </div>
  );
};

export default AllPages;
