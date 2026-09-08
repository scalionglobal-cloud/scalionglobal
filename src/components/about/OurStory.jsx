const OurStory = () => {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>

            <span className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0A2540] leading-tight">
              We Simplify
              <br />
              eCommerce Growth.
            </h2>

            <div className="w-20 h-[2px] bg-[#C9A45C] mt-8"></div>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Scalion Global was founded with a simple vision —
              helping businesses overcome marketplace complexity
              and achieve sustainable growth.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              From marketplace management and catalog optimization
              to compliance and international expansion, we provide
              the expertise, strategy, and execution brands need to
              thrive in a competitive digital landscape.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div>
                <h3 className="text-4xl font-bold text-[#0A2540]">
                  100+
                </h3>

                <p className="text-gray-500 mt-2">
                  Successful Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#0A2540]">
                  15+
                </h3>

                <p className="text-gray-500 mt-2">
                  Countries Supported
                </p>
              </div>

            </div>

          </div>

          {/* Right Visual */}
          <div className="relative">

            {/* Background Shapes */}
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-[40px] bg-[#C9A45C]/10"></div>

            <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-[50px] bg-[#0A2540]/5"></div>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#0A2540] to-[#163C68] rounded-[40px] p-12 shadow-2xl">

              <div className="bg-white rounded-[30px] p-10">

                <span className="text-[#C9A45C] uppercase tracking-[3px] text-sm font-semibold">
                  What Drives Us
                </span>

                <h3 className="mt-4 text-3xl font-bold text-[#0A2540]">
                  Helping Brands
                  Scale Beyond
                  Boundaries.
                </h3>

                <p className="mt-6 text-gray-600 leading-relaxed">
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