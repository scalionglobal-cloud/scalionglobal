import { ArrowDownToLine } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-24 md:pt-28 pb-16 md:pb-24">

      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-72 md:w-96 h-72 md:h-96 bg-[#C9A45C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 md:w-80 h-64 md:h-80 bg-[#0A2540]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="text-[#C9A45C] text-sm md:text-lg font-bold uppercase tracking-[3px] mb-4">
              About Scalion Global
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] leading-tight">
              Built for Growth.
              <br />
              Designed for
              <span className="text-[#C9A45C]"> Global Scale.</span>
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              We help brands navigate marketplaces, optimize operations,
              and expand globally through strategy, technology,
              and execution.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-4">

              <a
                href="/brochure.pdf"
                download
                className="bg-[#0A2540] text-white px-6 md:px-7 py-3 md:py-4 rounded-full flex items-center gap-2 hover:bg-[#102f54] transition-all duration-300"
              >
                Download Brochure
                <ArrowDownToLine size={18} />
              </a>

              <Link
                to="/contact"
                className="border border-[#0A2540] text-[#0A2540] px-6 md:px-7 py-3 md:py-4 rounded-full hover:bg-[#0A2540] hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">
                      <div className="hidden md:block absolute inset-0 rounded-full border border-gray-200 scale-125"></div>
            <div className="hidden md:block absolute inset-10 rounded-full border border-gray-200"></div>

            <div className="relative h-[320px] md:h-[450px] flex items-center justify-center">

              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-[#C9A45C]/40 flex items-center justify-center">

                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-[#0A2540] to-[#163C68] flex items-center justify-center text-center text-white p-6 shadow-2xl">

                  <div>
                    <h3 className="text-lg md:text-2xl font-semibold">
                      Ideas.
                    </h3>

                    <h3 className="text-lg md:text-2xl font-semibold">
                      Execution.
                    </h3>

                    <h3 className="text-lg md:text-2xl font-semibold">
                      Impact.
                    </h3>
                  </div>

                </div>

              </div>

              {/* Floating Card 1 */}
              <div className="absolute top-4 md:top-12 left-0 bg-white shadow-xl rounded-2xl p-3 md:p-5">
                <p className="text-xl md:text-3xl font-bold text-[#0A2540]">
                  100+
                </p>
                <span className="text-gray-500 text-xs md:text-sm">
                  Projects Delivered
                </span>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-4 md:bottom-12 right-0 bg-white shadow-xl rounded-2xl p-3 md:p-5">
                <p className="text-xl md:text-3xl font-bold text-[#0A2540]">
                  20+
                </p>
                <span className="text-gray-500 text-xs md:text-sm">
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