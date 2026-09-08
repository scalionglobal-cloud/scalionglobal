import React from "react";

import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ProcessSection from "../components/services/ProcessSection";
import FeaturedService from "../components/services/FeaturedService";
import WhyScalion from "../components/services/WhyScalion";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHero />

        <ServicesGrid />

        <ProcessSection />

        <FeaturedService />

        <WhyScalion />

        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
};

export default Services;