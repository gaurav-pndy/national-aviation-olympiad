import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import ExpertCommittee from "../components/ExpertCommittee";
import Olympiad from "../components/Olympiad";
import OlympiadInstructions from "../components/OlympiadInstructions";
import SchoolInstructions from "../components/SchoolInstructions";
import PreparationResources from "../components/PreparationResources";
import RegistrationProcess from "../components/RegistrationProcess";
import Contact from "../components/Contact";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <ExpertCommittee />
      <Olympiad />
      <OlympiadInstructions />
      <SchoolInstructions />
      <PreparationResources />
      <RegistrationProcess />
      <Timeline />
      <Contact />
    </>
  );
};

export default Home;
