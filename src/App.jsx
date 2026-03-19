import "./App.css";
import HeroSection from "./Components/HeroSection";
import CreatorSection from "./Components/CreatorSection";
import ProgramsSection from "./Components/ProgramsSection";
import WhyChooseSection from "./Components/WhyChooseSection";
import EcosystemSection from "./Components/EcosystemSection";
import CareersSection from "./Components/CareersSection";
import Awards from "./Components/Awards";
import Demo from "./Components/Demo";
import Footer from "./Components/Footer";
import Formpage from "./Components/Formpage";
import Imagine from "../src/Components/Imagine"
import Testmonial from "./Components/Testmonial";

function App() {
  return (
    <>
      {/* HERO — LOAD IMMEDIATELY */}
    <HeroSection  />
    <CreatorSection />
    <ProgramsSection />
    <WhyChooseSection />
    <EcosystemSection />
    <CareersSection />
    <Awards />
    <Demo />
    <Testmonial/>
    <Imagine/>
    <Formpage />
    <Footer />
    </>
  );
}

export default App;
