import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import ImpactNumbers from "../components/about/ImpactNumbers";
import GrowthPhilosophy from "../components/about/GrowthPhilosophy";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <>
      <Navbar />

      <AboutHero />
      <OurStory />
      <MissionVision />
      <ImpactNumbers />
      <GrowthPhilosophy />
      <AboutCTA />

      <Footer />
    </>
  );
};

export default About;