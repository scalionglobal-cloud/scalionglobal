import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";
import PricingCTA from "../components/pricing/PricingCTA";
import FAQPricing from "../components/pricing/FAQPricing";

const Pricing = () => {
  return (
    <>
      <Navbar />

      <PricingHero />
      <PricingPlans />
      <PricingCTA />
      <FAQPricing />
      <Footer />
    </>
  );
};

export default Pricing;