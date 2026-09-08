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
];

const WhyScalion = () => {
  return (
    <section className="py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}

          <div className="sticky top-24">

            <p className="uppercase tracking-[4px] text-[#C9A45C] mb-4 font-semibold">
              Why Choose Us
            </p>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#071B3B] leading-tight">
              More Than
              <br />
              A Service
              <br />
              Partner.
            </h2>

            <p className="mt-8 text-lg text-gray-600 max-w-lg leading-8">
              We partner with ambitious brands to create sustainable
              growth through marketplace expertise, operational excellence,
              and international expansion.
            </p>

            {/* CTA */}

            <div className="mt-12">

              <p className="text-sm uppercase tracking-[3px] text-[#C9A45C] font-semibold mb-5">
                Ready To Scale Your Brand?
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#C9A45C] text-[#071B3B] px-8 py-4 rounded-full font-semibold hover:bg-[#d6b36f] transition-all duration-300 shadow-lg"
                            >
                Book a 30-Minute Consultation
              </Link>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                </span>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-[32px] p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-[#071B3B] text-white flex items-center justify-center text-xl shrink-0 group-hover:bg-[#C9A45C] group-hover:text-[#071B3B] transition-all duration-300">
                    ✦
                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-[#071B3B] mb-3">
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