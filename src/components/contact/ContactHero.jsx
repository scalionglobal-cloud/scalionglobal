import { ArrowRight } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#071B3B] pt-36 pb-32">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-[120px]" />

      {/* Dot Pattern */}
      <div className="absolute top-40 left-20 opacity-20">
        <div className="grid grid-cols-6 gap-3">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          ))}
        </div>
      </div>

      <div className="absolute top-40 right-20 opacity-20">
        <div className="grid grid-cols-6 gap-3">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold">
          Contact Us
        </span>

        <h1 className="mt-6 text-6xl md:text-7xl font-bold text-white leading-tight">
          Let's Build Something
          <span className="text-[#C9A45C]"> Extraordinary</span>
        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Whether you're launching, optimizing, or scaling globally,
          our experts are ready to help you unlock new growth
          opportunities across marketplaces and digital commerce.
        </p>

        <button className="mt-10 bg-[#C9A45C] text-[#071B3B] px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition">
          Schedule Consultation
          
        </button>

      </div>
    </section>
  );
};

export default ContactHero;