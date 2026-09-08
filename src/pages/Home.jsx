import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import GlobalPresence from "../components/home/GlobalPresence";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import Marquee from "../components/home/Marquee";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Stats />
      <WhyChooseUs />
      <GlobalPresence />
      <Contact />
      <Footer />

    </>
  );
};

export default Home;