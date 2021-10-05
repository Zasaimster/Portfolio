import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/Hero";
import { homeObj1, homeObj2, homeObj3 } from "../components/InfoSection/Data";
import {
  homePage,
  about,
  experience,
  projects,
  darkTheme,
  lightTheme,
} from "../constants/constants";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar/Sidebar";

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
      <InfoSection colorTheme={lightTheme} data={about} />
      <InfoSection colorTheme={darkTheme} data={about} />
      <Services />
      <InfoSection colorTheme={lightTheme} data={experience} />
      <Footer />
    </>
  );
};

export default Home;
