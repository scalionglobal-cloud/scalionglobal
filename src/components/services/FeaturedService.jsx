import React from "react";

const FeaturedService = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <div>

            <p className="uppercase tracking-[4px] text-[#C9A45C] mb-4">
              Featured Solution
            </p>

            <h2 className="font-serif text-5xl md:text-6xl text-[#071B3B] leading-tight">
              Marketplace
              <br />
              Growth Services
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              We help brands grow faster across leading marketplaces
              through strategic account management, optimization,
              advertising, catalog enhancement and international expansion.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Marketplace Account Management",
                "Catalog Optimization",
                "Enhanced Brand Content",
                "Advertising & Growth",
                "Global Expansion Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#C9A45C]/15 flex items-center justify-center text-[#C9A45C]">
                    ✓
                  </div>

                  <span className="text-[#071B3B] text-lg">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <button className="mt-10 rounded-full bg-[#071B3B] text-white px-8 py-4 hover:bg-[#0E295A] transition-all duration-300">
              Learn More →
            </button>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#C9A45C]/10 blur-[120px] rounded-full"></div>

            <div className="relative z-10 rounded-[40px] bg-[#071B3B] p-10 shadow-[0_25px_60px_rgba(7,27,59,0.15)] overflow-hidden">

              <p className="text-[#C9A45C] text-sm uppercase tracking-[3px] mb-3">
                Growth Focus
              </p>

                            <p className="text-gray-300 leading-relaxed text-lg">
                Helping brands improve visibility, conversion,
                compliance, and international reach across
                leading global marketplaces.
              </p>

            </div>

          </div>
      </div>
    </div>
    </section>
  );
};

export default FeaturedService;