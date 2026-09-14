import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "End-to-End Solutions",
    desc: "From marketplace setup to international expansion, everything under one roof.",
  },
  {
    title: "Global Reach",
    desc: "Helping brands scale across multiple countries and marketplaces.",
  },
  {
    title: "Data-Driven Decisions",
    desc: "Performance insights and optimization strategies backed by analytics.",
  },
  {
    title: "Dedicated Experts",
    desc: "Specialized teams across operations, cataloging, compliance, and growth.",
  },
  {
    title: "Marketplace Excellence",
    desc: "Optimized marketplace operations that improve visibility and sales.",
  },
  {
    title: "Scalable Growth",
    desc: "Proven strategies designed to support long-term business expansion.",
  },
];

const WhyScalion = () => {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-24">

            <p className="text-[#C9A45C] text-sm md:text-lg font-bold uppercase tracking-[3px] mb-4">
              Why Choose Us
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#071B3B] leading-tight">
              More Than
              <br />
              A Service
              <br />
              Partner.
            </h2>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 max-w-lg leading-7 md:leading-8">
              We partner with ambitious brands to create sustainable
              growth through marketplace expertise, operational excellence,
              and international expansion.
            </p>

            <div className="mt-10 md:mt-12">

              <p className="text-xs md:text-sm uppercase tracking-[3px] text-[#C9A45C] font-semibold mb-5">
                Ready To Scale Your Brand?
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#C9A45C] text-[#071B3B] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-[#d6b36f] transition-all duration-300 shadow-lg"
              >
                Book a 30-Minute Consultation
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  ${
                    index > 2
                      ? "hidden md:block"
                      : "block"
                  }
                  group
                  bg-white
                  rounded-[28px]
                  p-6 md:p-8
                  border
                  border-gray-100
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                  h-full
                `}
              >

                <div className="flex items-start gap-5">

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-[#071B3B]
                      text-white
                      flex
                      items-center
                      justify-center
                      text-xl
                      shrink-0
                      group-hover:bg-[#C9A45C]
                      group-hover:text-[#071B3B]
                      transition-all
                      duration-300
                    "
                  >
                    ✦
                  </div>

                  <div>

                    <h3 className="text-xl md:text-2xl font-semibold text-[#071B3B] mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyScalion;