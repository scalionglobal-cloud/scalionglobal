import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroMap from "../../images/Herosection_clear.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center">

      {/* Background Map */}
      <img
        src={HeroMap}
        alt="World Map"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-90
          pointer-events-none
          select-none
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/65" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="max-w-3xl">

          {/* Subtitle */}
          <p className="uppercase tracking-[5px] text-[#3559c7] font-semibold mb-6 text-sm">
            Ecommerce • Marketplaces • Growth
          </p>

          {/* Heading */}
          <h1
            className="
              font-serif
              text-[#0A2540]
              leading-[0.95]
              text-[44px]
              sm:text-[56px]
              md:text-[64px]
              lg:text-[78px]
            "
          >
            Scale Your
            <br />
            Brand
            <br />
            <span className="text-[#3559c7]">
              Internationally.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-gray-600 text-lg leading-8 max-w-2xl">
            Scalion Global helps brands scale across domestic and international
            eCommerce marketplaces through marketplace management, catalog
            optimization, logistics, compliance, digital transformation, and
            intelligent business solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <Link
              to="/contact"
              className="
                bg-[#0A2540]
                text-white
                px-8
                py-4
                rounded-xl
                flex
                items-center
                justify-center
                gap-3
                hover:bg-[#3559c7]
                transition-all
                duration-300
                shadow-lg
              "
            >
              Let's Scale Your Brand
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="
                bg-white
                border
                border-gray-300
                px-8
                py-4
                rounded-xl
                flex
                items-center
                justify-center
                gap-3
                hover:border-[#3559c7]
                hover:text-[#3559c7]
                transition-all
                duration-300
              "
            >
              View Our Services
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;