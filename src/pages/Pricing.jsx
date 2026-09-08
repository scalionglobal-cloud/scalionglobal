import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";

const Pricing = () => {
  return (
    <>
      <Navbar />

      <PricingHero />
      <PricingPlans />

      <Footer />
    </>
  );
};

export default Pricing;