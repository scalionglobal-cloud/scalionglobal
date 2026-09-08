import React from "react";

const steps = [
  {
    number: "01",
    title: "Analyze",
    description:
      "Understand your business, products, competitors, and marketplace performance.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Develop a customized roadmap aligned with your goals and growth opportunities.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Implement marketplace, branding, logistics, and optimization strategies.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Continuously improve performance through insights and data-driven decisions.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Expand into new regions, marketplaces, and revenue streams globally.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#071B3B] text-white">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#C9A45C]/10 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <p className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold mb-5">
            Our Process
          </p>

          <h2 className="font-serif text-5xl md:text-6xl leading-tight">
            How We Work
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            A proven framework designed to transform marketplace
            opportunities into sustainable global growth.
          </p>

        </div>

        {/* Desktop Process */}
        <div className="hidden lg:block relative">

          {/* Connecting Line */}
          <div className="absolute top-10 left-0 right-0 h-[2px] bg-white/10"></div>

          <div className="grid grid-cols-5 gap-6">

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative group"
              >

                {/* Dot */}
                <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-[#C9A45C] flex items-center justify-center text-[#071B3B] font-bold text-lg shadow-[0_0_30px_rgba(201,164,92,0.5)]">
                  {step.number}
                </div>

                {/* Card */}
                <div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 min-h-[220px] hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">

                  <h3 className="text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Mobile Version */}
        <div className="lg:hidden space-y-6">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >

              <div className="flex items-center gap-4 mb-4">

                <div className="w-14 h-14 rounded-full bg-[#C9A45C] text-[#071B3B] font-bold flex items-center justify-center">
                  {step.number}
                </div>

                <h3 className="text-2xl font-semibold">
                  {step.title}
                </h3>

              </div>

              <p className="text-gray-300">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;