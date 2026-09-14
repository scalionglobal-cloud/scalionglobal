import React from "react";

const MissionVision = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">

          <p className="text-[#C9A45C] text-sm md:text-xl font-bold uppercase tracking-[3px] mb-4">
            Purpose & Direction
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-[#071B3B] leading-tight">
            Driven By Purpose.
            <br />
            Guided By Vision.
          </h2>

        </div>

        {/* Cards */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* Background Accent */}
          <div className="absolute left-1/2 top-1/2 h-52 md:h-72 w-52 md:w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/5 blur-3xl" />

          {/* Mission Card */}
          <div
            className="
              group
              relative
              rounded-3xl
              bg-white
              border
              border-gray-100
              p-6 md:p-10
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-2
              hover:bg-[#071B3B]
              hover:shadow-2xl
            "
          >

            <div
              className="
                w-12 h-12
                md:w-14 md:h-14
                rounded-2xl
                bg-[#071B3B]
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-lg md:text-xl
                group-hover:bg-[#C9A45C]
                group-hover:text-[#071B3B]
                transition-all
              "
            >
              M
            </div>

            <h3 className="mt-6 md:mt-8 text-2xl md:text-3xl font-bold text-[#071B3B] group-hover:text-white transition-all">
              Our Mission
            </h3>

            <div className="w-16 h-[2px] bg-[#C9A45C] mt-4 md:mt-5"></div>

            <p className="mt-5 md:mt-6 text-gray-600 group-hover:text-gray-300 leading-relaxed text-base md:text-lg transition-all">
              To empower businesses with scalable marketplace
              solutions that drive growth, efficiency and long-term
              success across global marketplaces.
            </p>

          </div>
                    {/* Vision Card */}
          <div
            className="
              group
              relative
              rounded-3xl
              bg-[#071B3B]
              p-6 md:p-10
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:bg-[#0D2F66]
              hover:shadow-2xl
            "
          >

            <div
              className="
                w-12 h-12
                md:w-14 md:h-14
                rounded-2xl
                bg-white
                text-[#071B3B]
                flex
                items-center
                justify-center
                font-bold
                text-lg md:text-xl
                group-hover:bg-[#C9A45C]
                transition-all
              "
            >
              V
            </div>

            <h3 className="mt-6 md:mt-8 text-2xl md:text-3xl font-bold text-white">
              Our Vision
            </h3>

            <div className="w-16 h-[2px] bg-[#C9A45C] mt-4 md:mt-5"></div>

            <p className="mt-5 md:mt-6 text-white/80 leading-relaxed text-base md:text-lg">
              To become the most trusted global growth partner
              for ambitious brands seeking to expand, optimize
              and lead in digital commerce.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;