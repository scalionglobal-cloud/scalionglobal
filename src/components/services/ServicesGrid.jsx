import React from "react";

const services = [
  {
    title: "Marketplace Management",
    description:
      "Complete management of Amazon, Flipkart, Walmart, Noon and other marketplace accounts, including performance monitoring, issue resolution and account growth.",
    icon: "🛍️",
  },
  {
    title: "Cataloging",
    description:
      "Professional product listing creation, catalog uploads, content optimization, image management and variation setup to improve discoverability.",
    icon: "📋",
  },
  {
    title: "Account Optimization",
    description:
      "Data-driven analysis of sales, traffic and conversion metrics to improve account health, visibility and overall marketplace performance.",
    icon: "📈",
  },
  {
    title: "Global Expansion",
    description:
      "Launch and scale your business across international marketplaces with localization, logistics support and cross-border growth strategies.",
    icon: "🌍",
  },
  {
    title: "Compliance & IP Protection",
    description:
      "Protect your brand through compliance management, trademark support, listing protection and marketplace policy monitoring.",
    icon: "🛡️",
  },
  {
    title: "Brand Growth Support",
    description:
      "Strengthen your brand with advertising, enhanced brand content, storefront optimization and long-term marketplace growth planning.",
    icon: "🚀",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center mb-24">

          {/* Left */}
          <div>
            <p className="text-[#C9A45C] uppercase tracking-[4px] mb-5 text-sm font-semibold">
              What We Do
            </p>

            <h2 className="font-serif text-[#071B3B] leading-[0.95] text-[56px] md:text-[72px]">
              End-to-End
              <br />
              eCommerce
              <br />
              Solutions
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center max-w-xl ml-auto">

            <p className="text-[24px] md:text-[28px] leading-relaxed text-[#44506A] font-medium">
              We combine strategy, technology and marketplace expertise
              to help brands grow, operate efficiently and reach customers
              worldwide.
            </p>

            <div className="w-20 h-[3px] bg-[#C9A45C] mt-8 mb-8 rounded-full"></div>

            <div className="flex flex-wrap items-center gap-5 text-[14px] uppercase tracking-[5px] text-[#9AA5B8] font-semibold">

              <span>Strategy</span>

              <span className="text-[#C9A45C]">×</span>

              <span>Execution</span>

              <span className="text-[#C9A45C]">×</span>

              <span>Global Growth</span>

            </div>

          </div>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                p-8
                bg-[#071B3B]
                text-white
                border
                border-[#0d336f]
                transition-all
                duration-500
                hover:bg-[#F8F9FC]
                hover:text-[#071B3B]
                hover:-translate-y-3
                hover:shadow-2xl
                cursor-pointer
              "
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#3559c7]/10 blur-3xl"></div>
              </div>

              {/* Icon */}
              <div className="
                w-16
                h-16
                rounded-full
                flex
                items-center
                justify-center
                text-2xl
                mb-8
                bg-white/10
                group-hover:bg-[#3559c7]/10
                transition-all
                duration-500
              ">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="
                text-gray-300
                group-hover:text-gray-600
                leading-relaxed
                mb-10
                transition-all
                duration-500
              ">
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