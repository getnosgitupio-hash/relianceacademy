import { useRef, useState } from "react";
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
import Imagine from "../src/Components/Imagine";
import Testmonial from "./Components/Testmonial";
import Terms from "./Components/Terms";
import Animation from "./Components/Animations"; 
import Students from "./Components/Students";
import Movie from "./Components/Movies"; 

function App() {
  const formSectionRef = useRef(null);
  const [termsOpen, setTermsOpen] = useState(false);
  const [termsTab, setTermsTab] = useState("privacy");

  const openTerms = (tab = "privacy") => {
    setTermsTab(tab);
    setTermsOpen(true);
  };

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* HERO — LOAD IMMEDIATELY */}
      <HeroSection scrollToForm={scrollToForm} />
      
      <CreatorSection scrollToForm={scrollToForm} />
      <Formpage formRef={formSectionRef} onOpenTerms={openTerms} />
      <ProgramsSection scrollToForm={scrollToForm} />
      <Animation scrollToForm={scrollToForm} />
      <WhyChooseSection scrollToForm={scrollToForm} />
      <EcosystemSection scrollToForm={scrollToForm} />
      <CareersSection scrollToForm={scrollToForm} />
      <Awards scrollToForm={scrollToForm}  />
      
      <Demo scrollToForm={scrollToForm} />
      <Students scrollToForm={scrollToForm} />
      <Movie scrollToForm={scrollToForm} />
      <Testmonial scrollToForm={scrollToForm} />
      <Imagine scrollToForm={scrollToForm} />
      <Formpage formRef={formSectionRef} onOpenTerms={openTerms} />
      <Footer onOpenTerms={openTerms} />
      <Terms
        open={termsOpen}
        initialTab={termsTab}
        onClose={() => setTermsOpen(false)}
      />
    </>
  );
}

export default App;
