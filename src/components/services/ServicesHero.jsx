import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Amazon from "../../assets/logos/amazon.png";
import Walmart from "../../assets/logos/walmart.png";
import Shopify from "../../assets/logos/shopify.png";
import Ebay from "../../assets/logos/ebay.png";
import Etsy from "../../assets/logos/etsy.png";
import Alibaba from "../../assets/logos/alibaba.png";
import Flipkart from "../../assets/logos/flipkart.png";
import Noon from "../../assets/logos/noon.png";

const platforms = [
  {
    name: "Alibaba",
    logo: Alibaba,
    className: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    name: "Walmart",
    logo: Walmart,
    className: "top-16 right-0",
  },
  {
    name: "Amazon",
    logo: Amazon,
    className: "top-1/2 right-0 -translate-y-1/2",
  },
  {
    name: "Shopify",
    logo: Shopify,
    className: "bottom-16 right-4",
  },
  {
    name: "eBay",
    logo: Ebay,
    className: "bottom-0 left-1/2 -translate-x-1/2",
  },
  {
    name: "Etsy",
    logo: Etsy,
    className: "bottom-16 left-4",
  },
  {
    name: "Noon",
    logo: Noon,
    className: "top-1/2 left-0 -translate-y-1/2",
  },
  {
    name: "Flipkart",
    logo: Flipkart,
    className: "top-16 left-12",
  },
];

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A2A5E] text-white min-h-screen flex items-center">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2A5E] via-[#0B2F69] to-[#082149]" />

      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#C9A45C]/10 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#3559c7]/20 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[5px] text-[#C9A45C] text-sm font-semibold mb-6">
              Our Services
            </p>

            <h1 className="font-serif leading-[1] text-[56px] md:text-[72px]">
              Scale Locally.
              <br />
              <span className="text-[#C9A45C]">
                Sell Globally.
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 max-w-xl leading-8">
              From marketplace management and catalog optimization
              to international expansion, we help brands unlock
              sustainable growth across leading eCommerce platforms
              and global marketplaces.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#C9A45C] text-[#071B3B] px-8 py-4 rounded-full font-semibold hover:bg-[#d6b36f] transition-all duration-300 shadow-lg"
            >
              Talk to Our Experts
            </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:flex justify-center items-center">
          <div
            className="
              absolute
              w-[500px]
              h-[500px]
              rounded-full
              border
              border-white/50
              orbit-clockwise
              shadow-[0_0_40px_rgba(255,255,255,0.03)]
            "
          ></div>

          <div
            className="
              absolute
              w-[380px]
              h-[380px]
              rounded-full
              border
              border-white/80
              orbit-anticlockwise
              shadow-[0_0_20px_rgba(255,255,255,0.02)]
            "
          ></div>

            <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5"></div>

            {/* Center Glow */}
            <div className="absolute w-[220px] h-[220px] bg-[#C9A45C]/15 rounded-full blur-[80px]" />

            {/* Logo Orbit */}
            <div className="relative w-[520px] h-[520px]">

              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className={`absolute ${platform.className}`}
                >
                  <div className="bg-white rounded-3xl shadow-2xl w-[120px] h-[60px] flex items-center justify-center hover:-translate-y-2 transition-all duration-500">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="max-h-12 object-contain"
                    />
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesHero;