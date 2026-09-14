import React from "react";

const OurStory = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>

            <p className="text-[#C9A45C] text-sm md:text-xl font-bold uppercase tracking-[3px] mb-4">
              Our Story
            </p>

            <h2 className="mt-4 md:mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] leading-tight">
              We Simplify
              <br />
              eCommerce Growth.
            </h2>

            <div className="w-20 h-[2px] bg-[#C9A45C] mt-6 md:mt-8"></div>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
              Scalion Global was founded with a simple vision —
              helping businesses overcome marketplace complexity
              and achieve sustainable growth.
            </p>

            <p className="mt-5 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
              From marketplace management and catalog optimization
              to compliance and international expansion, we provide
              the expertise, strategy, and execution brands need to
              thrive in a competitive digital landscape.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10 md:mt-12">

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
                  100+
                </h3>

                <p className="text-sm md:text-base text-gray-500 mt-2">
                  Successful Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
                  20+
                </h3>

                <p className="text-sm md:text-base text-gray-500 mt-2">
                  Countries Supported
                </p>
              </div>

            </div>

          </div>
                    {/* Right Visual */}
          <div className="relative">

            {/* Background Shapes */}
            <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-24 md:w-40 h-24 md:h-40 rounded-[30px] md:rounded-[40px] bg-[#C9A45C]/10"></div>

            <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-32 md:w-52 h-32 md:h-52 rounded-[30px] md:rounded-[50px] bg-[#0A2540]/5"></div>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#0A2540] to-[#163C68] rounded-[24px] md:rounded-[40px] p-5 md:p-12 shadow-2xl">

              <div className="bg-white rounded-[20px] md:rounded-[30px] p-6 md:p-10">

                <span className="text-[#C9A45C] uppercase tracking-[3px] text-xs md:text-sm font-semibold">
                  What Drives Us
                </span>

                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-[#0A2540] leading-tight">
                  Helping Brands
                  <br />
                  Scale Beyond
                  <br />
                  Boundaries.
                </h3>

                <p className="mt-5 md:mt-6 text-sm md:text-base text-gray-600 leading-relaxed">
                  We combine marketplace expertise,
                  operational excellence, and growth-focused
                  strategies to create measurable business impact.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;