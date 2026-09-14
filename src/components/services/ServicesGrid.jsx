import React from "react";

const services = [
  {
    title: "Marketplace Management",
    description:
      "Complete management of Amazon, Flipkart, Walmart and other marketplace accounts.",
    icon: "🛍️",
  },
  {
    title: "Cataloging",
    description:
      "Professional product listing creation and catalog optimization.",
    icon: "📋",
  },
  {
    title: "Account Optimization",
    description:
      "Improve account health, visibility and marketplace performance.",
    icon: "📈",
  },
  {
    title: "Global Expansion",
    description:
      "Scale your business across international marketplaces.",
    icon: "🌍",
  },
  {
    title: "Compliance & IP Protection",
    description:
      "Protect your brand with compliance and trademark support.",
    icon: "🛡️",
  },
  {
    title: "Brand Growth Support",
    description:
      "Advertising, storefront optimization and growth planning.",
    icon: "🚀",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12 md:mb-24">

          <p className="text-[#C9A45C] text-sm md:text-2xl font-bold uppercase tracking-[3px] mb-3">
            What We Do
          </p>

          <h2 className="font-serif text-[#071B3B] leading-tight text-3xl md:text-6xl">
            End-to-End
            <br />
            eCommerce Solutions
          </h2>

          <p className="mt-4 md:mt-8 text-sm md:text-xl text-[#44506A] max-w-3xl mx-auto">
            We combine strategy, technology and marketplace expertise
            to help brands grow and reach customers worldwide.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
                    {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                md:rounded-[32px]
                p-3
                md:p-8
                bg-[#071B3B]
                text-white
                border
                border-[#0d336f]
                transition-all
                duration-500
                hover:bg-[#F8F9FC]
                hover:text-[#071B3B]
                hover:-translate-y-2
                hover:shadow-xl
                cursor-pointer
              "
            >

              <div
                className="
                  w-10 h-10
                  md:w-16 md:h-16
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-lg
                  md:text-2xl
                  mb-3
                  md:mb-8
                  bg-white/10
                  group-hover:bg-[#3559c7]/10
                  transition-all
                "
              >
                {service.icon}
              </div>

              <h3 className="text-[11px] md:text-2xl font-semibold mb-2 md:mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-[9px] md:text-base text-gray-300 group-hover:text-gray-600 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;