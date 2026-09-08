import { ArrowRight } from "lucide-react";
import HeroMap from "../../images/Herosection_clear.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">

      {/* Background Map */}
      <img
        src={HeroMap}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-300
          object-cover
          opacity-100
          pointer-events-none
          select-none
        "
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/55" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <div>

            <p className="uppercase tracking-[5px] text-[#3559c7] font-semibold mb-8 text-sm">
              Ecommerce. Marketplaces. Growth.
            </p>

            <h1
              className="
                font-serif
                text-[#0A2540]
                leading-[0.95]
                text-[52px]
                md:text-[64px]
                lg:text-[72px]
              "
            >
              Scaling Brands
              <br />
              Beyond
              <br />
              <span className="text-[#3559c7]">
                Boundaries.
              </span>
            </h1>

            <p className="mt-8 text-gray-600 text-lg leading-8 max-w-xl">
              Scalion Global helps brands accelerate growth through
              marketplace management, catalog optimization, logistics,
              compliance, digital transformation, and intelligent
              business solutions across international marketplaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Link
              to="/contact"
              className="bg-[#0A2540] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#3559c7] transition-all duration-300 shadow-lg"
            >
              Let's Scale Your Brand
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="bg-white border border-gray-300 px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:border-[#3559c7] hover:text-[#3559c7] transition-all duration-300"
            >
              View Our Services
              <ArrowRight size={18} />
            </Link>

          </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative h-[600px] hidden lg:block">

           

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;