import React from "react";

const stats = [
  {
    number: "20+",
    label: "Countries Supported",
  },
  {
    number: "100+",
    label: "Projects Delivered",
  },
  {
    number: "10+",
    label: "Specialized Services",
  },
  {
    number: "24/7",
    label: "Dedicated Support",
  },
];

const ImpactNumbers = () => {
  return (
    <section className="hidden lg:block py-20 md:py-32 bg-[#0A2540] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="text-[#C9A45C] text-sm md:text-xl font-bold uppercase tracking-[3px] mb-4">
            Our Impact
          </p>

          <h2 className="mt-4 md:mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
            Numbers That Reflect
            <br />
            Our Commitment.
          </h2>

        </div>

        {/* Stats Grid */}
        <div className="mt-12 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                  {stats.map((stat, index) => (
            <div
              key={index}
              className="
                group
                text-center
                bg-white/5
                backdrop-blur-sm
                border
                border-white/10
                rounded-3xl
                p-5 md:p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-white/10
              "
            >

              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white group-hover:text-[#C9A45C] transition duration-500">
                {stat.number}
              </h3>

              <div className="w-12 md:w-16 h-[2px] bg-[#C9A45C] mx-auto my-4 md:my-6"></div>

              <p className="text-gray-300 text-sm md:text-lg">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ImpactNumbers;