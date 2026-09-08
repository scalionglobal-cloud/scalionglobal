import {
  ShieldCheck,
  LineChart,
  SlidersHorizontal,
  Handshake,
  ArrowRight,
  CalendarDays,
  Headphones,
  MessageSquare,
} from "lucide-react";

import { Link } from "react-router-dom";

const features = [
  {
    icon: ShieldCheck,
    title: "Global Marketplace Expertise",
    description:
      "Navigate Amazon, Walmart, Noon, and international marketplaces with confidence and strategic guidance.",
  },
  {
    icon: LineChart,
    title: "Strategic Growth Planning",
    description:
      "Data-backed strategies designed to accelerate revenue and unlock new market opportunities.",
  },
  {
    icon: SlidersHorizontal,
    title: "Tailored Market Entry",
    description:
      "Customized expansion plans aligned with your industry, products, and business goals.",
  },
  {
    icon: Handshake,
    title: "A Long-Term Partner",
    description:
      "We grow alongside your business with ongoing support, insights, and sustainable growth initiatives.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full border border-blue-100 opacity-50 -translate-x-1/2"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-20 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <p className="uppercase tracking-[5px] text-[#3559c7] text-sm font-semibold">
                Why Choose Scalion Global
              </p>

              <div className="w-16 h-[2px] bg-[#3559c7]"></div>
            </div>

            <h2 className="text-5xl lg:text-7xl leading-tight font-serif text-[#0A2540]">
              Global Growth
              <br />
              Made Simple.
            </h2>

            <p className="mt-8 text-gray-600 text-xl leading-9 max-w-xl">
              We help brands navigate global marketplaces with the
              right strategy, local expertise, and end-to-end support
              so you can focus on growth while we handle execution.
            </p>

            {/* CTA Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                to="/contact"
                className="
                  bg-[#0A2540]
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-medium
                  inline-flex
                  items-center
                  gap-3
                  hover:bg-[#3559c7]
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >
                <CalendarDays size={20} />
                Book a 30-Minute Strategy Call
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Benefits */}

            <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <Headphones
                  size={22}
                  className="text-[#3559c7]"
                />
                <span className="text-gray-600">
                  Talk to an Expert
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays
                  size={22}
                  className="text-[#3559c7]"
                />
                <span className="text-gray-600">
                  No Obligation Call
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare
                  size={22}
                  className="text-[#3559c7]"
                />
                <span className="text-gray-600">
                  Tailored Guidance
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    bg-white
                    border
                    border-gray-200
                    rounded-3xl
                    p-7
                    flex
                    items-center
                    justify-between
                    gap-6
                    transition-all
                    duration-300
                    hover:border-[#3559c7]
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="
                        w-16
                        h-16
                        rounded-full
                        bg-[#F5F8FF]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon
                        size={28}
                        className="text-[#3559c7]"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-serif text-[#0A2540]">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 mt-2 leading-7 max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-[#F5F8FF]
                      flex
                      items-center
                      justify-center
                      text-[#3559c7]
                      group-hover:bg-[#3559c7]
                      group-hover:text-white
                      transition-all
                    "
                  >
                    <ArrowRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;