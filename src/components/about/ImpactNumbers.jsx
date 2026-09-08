const stats = [
  {
    number: "15+",
    label: "Countries Supported",
  },
  {
    number: "100+",
    label: "Projects Delivered",
  },
  {
    number: "10+",
    label: "Specialized Services",
  },
  {
    number: "24/7",
    label: "Dedicated Support",
  },
];

const ImpactNumbers = () => {
  return (
    <section className="py-32 bg-[#0A2540] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
            Numbers That Reflect
            <br />
            Our Commitment.
          </h2>

        </div>

        {/* Stats Grid */}

        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center"
            >

              <h3 className="text-6xl md:text-7xl font-bold text-white group-hover:text-[#C9A45C] transition duration-500">
                {stat.number}
              </h3>

              <div className="w-16 h-[2px] bg-[#C9A45C] mx-auto my-6"></div>

              <p className="text-gray-300 text-lg">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ImpactNumbers;