const PricingHero = () => {
  return (
    <section className="bg-[#071B3B] text-white pt-32 pb-40 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Label */}
        <span className="uppercase tracking-[10px] text-[#C9A45C] font-extrabold leading-tight">
          Pricing Plans
        </span>

        {/* Main Heading */}
        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          Simple,
          <span className="text-[#C9A45C]">
            {" "}Transparent Pricing
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Flexible plans designed to help brands
          scale locally and sell globally.
        </p>

      </div>

    </section>
  );
};

export default PricingHero;