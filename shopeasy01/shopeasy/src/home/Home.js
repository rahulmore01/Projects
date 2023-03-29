import React from "react";
import Nav from "./nav/Nav";
import Hero from "./hero/Hero"
// import imgbg from "../images/img-background.svg"
import "./Home.css";
import Services from "./services/Services"
import Features from "./features/Features";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Features />
      <Footer/>
      
    </>
  );
};

export default Home;
