import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-28 pb-24">
      
      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0A2540]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold">
              About Scalion Global
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-[#0A2540] leading-tight">
              Built for Growth.
              <br />
              Designed for
              <span className="text-[#C9A45C]"> Global Scale.</span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
              We help brands navigate marketplaces, optimize operations,
              and expand globally through strategy, technology,
              and execution.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/services"
                className="bg-[#0A2540] text-white px-7 py-4 rounded-full flex items-center gap-2 hover:bg-[#102f54] transition"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="border border-[#0A2540] text-[#0A2540] px-7 py-4 rounded-full hover:bg-[#0A2540] hover:text-white transition"
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* Right Content */}
          <div className="relative">

            <div className="absolute inset-0 rounded-full border border-gray-200 scale-125"></div>
            <div className="absolute inset-10 rounded-full border border-gray-200"></div>

            <div className="relative h-[450px] flex items-center justify-center">

              <div className="w-72 h-72 rounded-full border border-[#C9A45C]/40 flex items-center justify-center">

                <div className="w-52 h-52 rounded-full bg-gradient-to-br from-[#0A2540] to-[#163C68] flex items-center justify-center text-center text-white p-8 shadow-2xl">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      Ideas.
                    </h3>

                    <h3 className="text-2xl font-semibold">
                      Execution.
                    </h3>

                    <h3 className="text-2xl font-semibold">
                      Impact.
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-12 left-0 bg-white shadow-xl rounded-2xl p-5">
                <p className="text-3xl font-bold text-[#0A2540]">
                  100+
                </p>
                <span className="text-gray-500 text-sm">
                  Projects Delivered
                </span>
              </div>

              <div className="absolute bottom-12 right-0 bg-white shadow-xl rounded-2xl p-5">
                <p className="text-3xl font-bold text-[#0A2540]">
                  15+
                </p>
                <span className="text-gray-500 text-sm">
                  Countries Served
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;