import React from "react";

const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#071B3B] py-32">

      {/* Background Glow Effects */}
      <div className="absolute -top-20 left-20 h-72 w-72 rounded-full bg-[#C9A45C]/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-[#C9A45C] mb-6">
            Ready To Scale?
          </p>

          <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight max-w-5xl mx-auto">
            Let's Build
            <br />
            What's Next.
          </h2>

          <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Partner with Scalion Global to unlock new markets,
            optimize operations, and accelerate sustainable growth
            across global marketplaces.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <button className="rounded-full bg-[#C9A45C] px-8 py-4 text-[#071B3B] font-semibold hover:scale-105 transition duration-300">
              Book A Consultation
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 text-white hover:bg-white/10 transition duration-300">
              Explore Solutions
            </button>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-24 grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-white">15+</h3>
            <p className="text-gray-400 mt-2">
              Countries Served
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">12+</h3>
            <p className="text-gray-400 mt-2">
              Core Services
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">100+</h3>
            <p className="text-gray-400 mt-2">
              Projects Supported
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-white">24/7</h3>
            <p className="text-gray-400 mt-2">
              Client Support
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;