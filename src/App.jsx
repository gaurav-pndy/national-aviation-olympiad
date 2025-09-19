import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import ExpertCommittee from "./components/ExpertCommittee";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Olympiad from "./components/Olympiad";
import PreparationResources from "./components/PreparationResources";
import RegistrationProcess from "./components/RegistrationProcess";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <ExpertCommittee />
      <Olympiad />
      <PreparationResources />
      <RegistrationProcess />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
