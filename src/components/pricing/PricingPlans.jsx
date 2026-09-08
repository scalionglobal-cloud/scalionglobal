import React from "react";

const plans = [
  {
    name: "BASIC",
    subtitle: "STARTER SETUP",
    price: "₹24,999",
    asin: "ASIN 00-20 ON MARKETPLACES",
    features: [
      "Account Setup & Onboarding",
      "Basic SEO Optimization",
      "Pricing & Offer Management",
      "Order Processing Support",
      "Basic Ads Setup",
      "Monthly Performance Report",
    ],
  },
  {
    name: "PRO",
    subtitle: "GROWTH & OPTIMIZATION",
    price: "₹34,999",
    asin: "ASIN 20-50 ON MARKETPLACES",
    features: [
      "Everything in Basic",
      "Advanced Catalog Optimization",
      "A+ Content & Listings",
      "PPC Campaign Management",
      "Keyword Research Strategy",
      "Weekly Performance Reports",
      "Competitor Analysis",
      "Review Management",
    ],
  },
  {
    name: "PREMIUM",
    subtitle: "FULL MANAGEMENT",
    price: "₹44,999",
    asin: "ASIN 50-70 ON MARKETPLACES",
    features: [
      "Full Account Management",
      "Marketplace Expansion",
      "Advanced PPC Optimization",
      "Brand Store Setup",
      "Inventory Planning",
      "Return & Refund Handling",
      "Weekly Strategy Calls",
      "Dedicated Account Manager",
    ],
  },
  {
    name: "ADVANCED",
    subtitle: "FULL MANAGEMENT",
    price: "₹74,999",
    asin: "ASIN 70-150 ON MARKETPLACES",
    features: [
      "360° Marketplace Management",
      "India + Global Expansion",
      "Advanced Ads Automation",
      "Dedicated Team",
      "Growth Analytics Strategy",
      "Product Launch Planning",
      "Brand Building & D2C",
      "Performance Scaling",
    ],
  },
];

const PricingPlans = () => {
  return (
    <section className="bg-[#F8FAFC] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <span className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold">
            Pricing
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-serif text-[#071B3B]">
            Simple, Transparent Pricing
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible plans designed to help brands scale across
            marketplaces and global channels.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="
              pricing-card
              group
              relative
              rounded-[30px]
              bg-white
              p-8
              min-h-[720px]
              overflow-hidden
              border border-gray-100
              shadow-lg
              hover:bg-[#071B3B]
            "
          >
            {/* Gold Bottom Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C9A45C] transition-all duration-500 group-hover:w-full"></div>

            {/* Featured Badge */}
            {index === 1 && (
              <div className="absolute top-6 right-6">
                <span className="bg-[#C9A45C] text-[#071B3B] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </span>
              </div>
            )}

            {/* Plan Name */}
            <h3 className="text-2xl font-bold text-[#071B3B] group-hover:text-white transition-colors duration-500">
              {plan.name}
            </h3>

            {/* Subtitle */}
            <p className="mt-2 text-sm uppercase tracking-wide text-gray-500 group-hover:text-gray-300 transition-colors duration-500">
              {plan.subtitle}
            </p>

            {/* Price */}
            <div className="mt-8">
              <span className="text-4xl font-bold text-[#071B3B] group-hover:text-white transition-colors duration-500">
                {plan.price}
              </span>

              <span className="text-sm text-gray-500 group-hover:text-gray-300 ml-1">
                /month
              </span>

              {/* ASIN Box */}
              <div className="mt-5 bg-[#0A2540] text-white text-center rounded-xl py-3 px-3">
                <div className="text-sm font-semibold">
                  {plan.asin}
                </div>

                <div className="text-[10px] opacity-80 mt-1">
                  (AMAZON & FLIPKART)
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-6 pt-6 border-t border-gray-200 group-hover:border-white/10 transition-all duration-500">
              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 mb-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] text-xs shrink-0">
                    ✓
                  </div>

                  <span className="text-[14px] leading-5 text-gray-600 group-hover:text-gray-200 transition-colors duration-500">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
};

export default PricingPlans;