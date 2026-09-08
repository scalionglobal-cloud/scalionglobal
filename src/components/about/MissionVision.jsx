import React from "react";

const MissionVision = () => {
  return (
    <section className="py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[5px] text-[#C9A45C] text-sm font-semibold mb-4">
            Purpose & Direction
          </p>

          <h2 className="font-serif text-5xl md:text-6xl text-[#071B3B] leading-tight">
            Driven By Purpose.
            <br />
            Guided By Vision.
          </h2>

        </div>

        {/* Cards */}
        <div className="relative grid lg:grid-cols-2 gap-8">

          {/* Background Accent */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/5 blur-3xl" />

          {/* Mission */}
          <div className="group relative rounded-[32px] bg-white border border-gray-100 p-10 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:bg-[#071B3B] hover:shadow-2xl">

            <div className="w-14 h-14 rounded-2xl bg-[#071B3B] text-white flex items-center justify-center font-bold text-xl group-hover:bg-[#C9A45C] group-hover:text-[#071B3B] transition">
              M
            </div>

            <h3 className="mt-8 text-3xl font-bold text-[#071B3B] group-hover:text-white transition">
              Our Mission
            </h3>

            <div className="w-16 h-[2px] bg-[#C9A45C] mt-5"></div>

            <p className="mt-6 text-gray-600 group-hover:text-gray-300 leading-relaxed text-lg">
              To empower businesses with scalable marketplace
              solutions that drive growth, efficiency and long-term
              success across global marketplaces.
            </p>

          </div>

          {/* Vision */}
          <div className="group relative rounded-[32px] bg-[#071B3B] p-10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:bg-[#0D2F66] hover:shadow-2xl">

            <div className="w-14 h-14 rounded-2xl bg-white text-[#071B3B] flex items-center justify-center font-bold text-xl group-hover:bg-[#C9A45C] transition">
              V
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Our Vision
            </h3>

            <div className="w-16 h-[2px] bg-[#C9A45C] mt-5"></div>

            <p className="mt-6 text-white/80 leading-relaxed text-lg">
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