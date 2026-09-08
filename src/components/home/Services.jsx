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
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-[#3559c7] text-sm font-semibold mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A2540] leading-tight mb-6">
            End-to-End Support
            <br />
            for Global Growth
          </h2>

          <div className="w-20 h-[2px] bg-[#3559c7] mx-auto mb-6"></div>

          <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed">
            From marketplace management to international expansion,
            we provide tailored solutions that help brands scale across
            borders and achieve sustainable growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                  key={index}
                  className="
                    group
                    bg-white
                    border
                    border-gray-200
                    rounded-2xl
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-3
                    hover:border-[#3559c7]
                    hover:shadow-[0_20px_40px_rgba(53,89,199,0.15)]
                    flex
                    flex-col
                    h-full
                  "
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#F5F8FF] flex items-center justify-center mb-6">
                    <Icon size={28} className="text-[#3559c7]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#0A2540] mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    to="/services"
                    className="
                      mt-auto
                      inline-flex
                      items-center
                      gap-2
                      text-[#3559c7]
                      font-medium
                      transition-all
                      duration-300
                      group-hover:gap-4
                    "
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
          </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="
              inline-flex
              items-center
              gap-3
              bg-[#0A2540]
              text-white
              px-8
              py-4
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