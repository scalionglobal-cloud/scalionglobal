 import { Globe } from "lucide-react";

const countries = [
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
  { name: "France", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
  { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "Singapore", flag: "https://flagcdn.com/w40/sg.png" },
  { name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png" },
  { name: "China", flag: "https://flagcdn.com/w40/cn.png" },
];

const GlobalPresence = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#C9A45C] text-sm md:text-lg font-bold uppercase tracking-[3px] mb-3">
            Global Presence
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-[#0A2540] leading-tight">
            Expanding Brands
            <br />
            Across Borders
          </h2>

          <p className="mt-5 text-sm md:text-lg text-gray-600 leading-relaxed">
            Scalion Global helps businesses scale across international
            marketplaces through localized strategies, compliance support,
            logistics, and marketplace expertise.
          </p>
        </div>

        {/* Countries */}
        <div className="relative mt-12 md:mt-16">

          {/* Background Globe */}
          <div className="absolute inset-0 flex justify-center items-center opacity-[0.03] pointer-events-none">
            <Globe size={400} />
          </div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4">
            {countries.map((country) => (
              <div
                key={country.name}
                className="
                  bg-white
                  rounded-xl
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                  px-4
                  py-4
                  flex
                  items-center
                  gap-3
                "
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-7 h-5 object-cover rounded-sm"
                />

                <span className="font-medium text-[#0A2540] text-sm md:text-base">
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

