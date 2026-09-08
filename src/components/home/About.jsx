import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <div>

            <p className="uppercase tracking-[4px] text-[#3559c7] text-sm font-semibold mb-8">
              About Us
            </p>

            <h2 className="text-[56px] leading-tight font-serif text-[#0A2540]">
              We Build.
              <br />
              We Scale.
              <br />
              We Drive Impact.
            </h2>

            <p className="mt-10 text-gray-600 text-lg leading-8 max-w-xl">
              Scalion Global is a growth-focused eCommerce and marketplace
              consulting company helping brands expand across local and
              international marketplaces through strategy, technology,
              operations, and performance-driven execution.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              From marketplace management and catalog optimization to
              logistics, compliance, and global expansion, we provide
              end-to-end solutions designed for sustainable growth.
            </p>

            <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 text-[#3559c7] font-medium hover:gap-4 transition-all"
          >
            Learn More About Us
            <ArrowRight size={18} />
          </Link>
          </div>

          {/* RIGHT IMAGE */}

          <div>

            <div className="rounded-3xl overflow-hidden shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                alt="Scalion Global"
                className="w-full h-[550px] object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;