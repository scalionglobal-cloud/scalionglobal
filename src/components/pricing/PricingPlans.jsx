import React from "react";

const plans = [
  {
    name: "BASIC",
    subtitle: "STARTER SETUP",
    originalPrice: "₹41,999",
    price: "₹24,999",
    usd: "$299",
    save: "₹17,000",
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
    originalPrice: "₹58,999",
    price: "₹34,999",
    usd: "$419",
    save: "₹24,000",
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
    originalPrice: "₹75,999",
    price: "₹44,999",
    usd: "$539",
    save: "₹31,000",
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
    subtitle: "ENTERPRISE GROWTH",
    originalPrice: "₹124,999",
    price: "₹74,999",
    usd: "$899",
    save: "₹50,000",
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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-3 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">

          <span className="inline-block bg-[#C9A45C]/10 text-[#C9A45C] px-3 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
            Special Launch Offer
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#071B3B]">
            Choose Your Growth Plan
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Transparent pricing designed to help brands scale across
            Amazon, Flipkart, Walmart, Etsy and global marketplaces.
          </p>

        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="
                pricing-card
                group
                relative
                bg-white
                rounded-xl md:rounded-2xl
                p-3 md:p-4
                shadow-md
                border border-gray-100
                flex flex-col
                min-h-[430px]
                md:min-h-[620px]
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-[#071B3B]
                hover:border-[#C9A45C]
              "
            >

              {index === 1 && (
                <div className="absolute top-2 right-2">
                  <span className="bg-[#C9A45C] text-[#071B3B] text-[7px] md:text-[10px] font-bold px-2 py-1 rounded-full">
                    ⭐ BEST VALUE
                  </span>
                </div>
              )}

              <div className="inline-block mb-2">
                <span className="bg-red-500 text-white text-[7px] md:text-[10px] font-bold px-2 py-1 rounded-full">
                  🔥 FLAT 40% OFF
                </span>
              </div>

              <h3 className="text-base md:text-2xl font-bold text-[#071B3B] group-hover:text-white">
                {plan.name}
              </h3>

              <p className="mt-1 text-[8px] md:text-xs uppercase tracking-wide text-gray-500 group-hover:text-gray-300">
                {plan.subtitle}
              </p>

              <div className="mt-2">

                <p className="text-gray-400 line-through text-[9px] md:text-sm">
                  {plan.originalPrice}
                </p>

                <div className="mt-1">
                  <span className="text-xl md:text-4xl font-extrabold text-[#071B3B] group-hover:text-white">
                    {plan.price}
                  </span>

                  <span className="text-[8px] md:text-xs text-gray-500 group-hover:text-gray-300 ml-1">
                    /month
                  </span>
                </div>
                                <div className="mt-2">
                  <span className="bg-[#C9A45C]/10 text-[#C9A45C] px-2 py-1 rounded-full text-[8px] md:text-xs font-bold">
                    {plan.usd}/month USD
                  </span>
                </div>

                <div className="mt-2">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[8px] md:text-xs font-bold">
                    SAVE {plan.save}
                  </span>
                </div>

                <div className="mt-3 bg-gradient-to-r from-[#071B3B] to-[#0A2540] text-white rounded-lg md:rounded-xl py-2 px-2 text-center">

                  <div className="text-[8px] md:text-xs font-bold">
                    {plan.asin}
                  </div>

                  <div className="text-[6px] md:text-[9px] opacity-80 mt-1">
                    AMAZON • FLIPKART • GLOBAL
                  </div>

                </div>

                <p className="text-center text-[7px] md:text-[10px] text-gray-500 group-hover:text-gray-300 mt-2">
                  Amazon • Flipkart • Walmart • Etsy
                </p>

              </div>

              <div className="mt-3 pt-3 border-t border-gray-200 group-hover:border-white/10 flex-grow">

                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-1.5 mb-1.5"
                  >
                    <div className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-[#C9A45C]/20 flex items-center justify-center text-[#C9A45C] text-[8px] md:text-xs shrink-0">
                      ✓
                    </div>

                    <span className="text-[8px] md:text-[13px] leading-3 md:leading-5 text-gray-600 group-hover:text-gray-200">
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

              <div className="mt-auto pt-3">

                <a
                  href={`https://wa.me/919671513716?text=${encodeURIComponent(
                    `Hello Scalion Global,

                      I am interested in the ${plan.name} Plan.

                      Please share: Plan details

                      Thank you.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    bg-[#C9A45C]
                    text-[#071B3B]
                    font-semibold
                    text-[10px]
                    md:text-base
                    py-2
                    md:py-3
                    rounded-lg
                    md:rounded-xl
                    flex
                    items-center
                    justify-center
                    hover:bg-[#d8b56a]
                    transition-all
                  "
                >
                  Book Your Plan →
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PricingPlans;