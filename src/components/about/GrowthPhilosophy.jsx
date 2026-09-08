const steps = [
  {
    number: "01",
    title: "Analyze",
    description:
      "Understanding your business, marketplace position, and growth opportunities.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Building tailored plans aligned with your goals and market dynamics.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Implementing solutions with precision across operations and marketplaces.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Continuously refining performance through data-driven improvements.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Expanding sustainably into new markets and growth opportunities.",
  },
];

const GrowthPhilosophy = () => {
  return (
    <section className="py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold">
            Our Philosophy
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-[#0A2540]">
            A Proven Framework
            <br />
            For Sustainable Growth.
          </h2>

          <p className="mt-8 text-lg text-gray-600">
            Every successful partnership follows a structured
            approach focused on clarity, execution, and measurable results.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-24 relative">

          {/* Center Line */}

          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-gray-200"></div>

          <div className="grid lg:grid-cols-5 gap-10">

            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >

                {/* Circle */}

                <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[#0A2540] font-bold text-lg group-hover:bg-[#0A2540] group-hover:text-white transition duration-500">
                  {step.number}
                </div>

                {/* Content */}

                <div className="mt-8 text-center">

                  <h3 className="text-2xl font-bold text-[#0A2540]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default GrowthPhilosophy;