import { Globe } from "lucide-react";

const countries = [
  {
    name: "India",
    flag: "https://flagcdn.com/w40/in.png",
  },
  {
    name: "USA",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w40/ca.png",
  },
  {
    name: "UAE",
    flag: "https://flagcdn.com/w40/ae.png",
  },
  {
    name: "Australia",
    flag: "https://flagcdn.com/w40/au.png",
  },
  {
    name: "France",
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    name: "Italy",
    flag: "https://flagcdn.com/w40/it.png",
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/w40/jp.png",
  },
  {
    name: "Singapore",
    flag: "https://flagcdn.com/w40/sg.png",
  },
  {
    name: "Bangladesh",
    flag: "https://flagcdn.com/w40/bd.png",
  },
  {
    name: "China",
    flag: "https://flagcdn.com/w40/cn.png",
  },
];

const GlobalPresence = () => {
  return (
    <section className="py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#3559c7] text-sm font-semibold mb-8">
            Global Presence
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A2540] leading-tight">
            Expanding Brands
            <br />
            Across Borders.
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Scalion Global helps businesses scale across multiple
            international marketplaces through localized strategies,
            compliance support, logistics, and marketplace expertise.
          </p>
        </div>

        {/* Countries */}
        <div className="relative mt-20">

          {/* Background Globe */}
          <div className="absolute inset-0 flex justify-center items-center opacity-[0.04] pointer-events-none">
            <Globe size={550} />
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {countries.map((country) => (
              <div
                key={country.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 px-6 py-6 flex items-center gap-4"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-8 h-6 object-cover rounded-sm shadow-sm"
                />

                <span className="font-semibold text-[#0A2540] text-lg">
                  {country.name}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;