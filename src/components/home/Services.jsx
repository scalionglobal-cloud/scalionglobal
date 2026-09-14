import {
  Briefcase,
  TrendingUp,
  FileText,
  Megaphone,
  ShieldCheck,
  Globe,
  Truck,
  Layers3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Briefcase,
    title: "Marketplace Management",
    description:
      "Manage marketplace operations with optimized listings, account health monitoring, and growth-focused execution.",
  },
  {
    icon: TrendingUp,
    title: "eCommerce Growth",
    description:
      "Scale revenue through marketplace expansion, performance optimization, and growth strategies.",
  },
  {
    icon: FileText,
    title: "Catalog Optimization",
    description:
      "Improve discoverability with SEO-rich listings, enhanced content, and catalog structuring.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description:
      "Drive sales through targeted PPC campaigns, ad optimization, and performance tracking.",
  },
  {
    icon: Layers3,
    title: "Enhanced Brand Content",
    description:
      "Create premium content experiences that strengthen brand identity and improve conversions.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Protection",
    description:
      "Ensure compliance, protect intellectual property, and maintain marketplace integrity.",
  },
  {
    icon: Truck,
    title: "FBA & Logistics",
    description:
      "Streamline inventory, fulfillment, and logistics operations for scalable growth.",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description:
      "Expand internationally with localized strategies, market research, and execution support.",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[#C9A45C] text-sm md:text-lg font-bold uppercase tracking-[3px] mb-4">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#0A2540] leading-tight mb-6">
            End-to-End Support
            <br />
            for Global Growth
          </h2>

          <div className="w-20 h-[2px] bg-[#3559c7] mx-auto mb-6"></div>

          <p className="max-w-3xl mx-auto text-gray-500 text-sm md:text-lg leading-relaxed">
            From marketplace management to international expansion, we provide
            tailored solutions that help brands scale across borders and achieve
            sustainable growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`
                  ${
                    index > 3 ? "hidden md:flex" : "flex"
                  }
                  group
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  p-4 md:p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#3559c7]
                  hover:shadow-[0_20px_40px_rgba(53,89,199,0.15)]
                  flex-col
                  h-full
                `}
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#F5F8FF] flex items-center justify-center mb-3 md:mb-6">
                  <Icon
                    size={18}
                    className="md:w-7 md:h-7 text-[#3559c7]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-xl font-semibold text-[#0A2540] mb-2 md:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-base text-gray-500 leading-relaxed mb-4 md:mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Learn More */}
                <Link
                  to="/services"
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    gap-1 md:gap-2
                    text-[#3559c7]
                    text-xs md:text-base
                    font-medium
                    transition-all
                    duration-300
                    group-hover:gap-3
                  "
                >
                  Learn More
                  <ArrowRight size={14} className="md:w-[18px] md:h-[18px]" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/services"
            className="
              inline-flex
              items-center
              gap-3
              bg-[#0A2540]
              text-white
              px-6 md:px-8
              py-3 md:py-4
              rounded-full
              font-medium
              transition-all
              duration-300
              hover:bg-[#3559c7]
              hover:shadow-lg
            "
          >
            Explore All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
