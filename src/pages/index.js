import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/Home/Home";
import {
  homePage,
  about,
  experience,
  projects,
  darkTheme,
  lightTheme,
} from "../constants/constants";
import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Experience from "../components/Experience/Experience";
import Projects from "../components/PersonalProjects/Projects";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection data={homePage} />
      <About colorTheme={darkTheme} data={about} />
      <Experience colorTheme={lightTheme} data={experience} />
      <Projects colorTheme={darkTheme} data={projects} />
      <Footer />
    </>
  );
};

export default Home;
