import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#071B3B] py-32">

      {/* Glow Effects */}

      <div className="absolute top-0 left-20 h-72 w-72 rounded-full bg-[#C9A45C]/20 blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative">

        <span className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold">
          Let's Build Together
        </span>

        <h2 className="mt-6 text-5xl md:text-7xl font-bold text-white leading-tight">
          Let's Build
          <br />
          What's Next.
        </h2>

        <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto">
          Whether you're launching, scaling, or expanding globally,
          Scalion Global is ready to help you unlock your next stage of growth.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="bg-[#C9A45C] text-[#071B3B] px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
            Contact Us
            <ArrowRight size={18} />
          </button>

          <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
            Explore Services
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;