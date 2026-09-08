import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-White] text-[#04142D]">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-bold">
              Scalion
            </h2>

            <p className="tracking-[4px] text-sm text-gray-400 mt-1">
              GLOBAL
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Helping brands scale across global marketplaces
              through strategy, operations, technology,
              logistics, and marketplace expertise.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>Marketplace Management</li>
              <li>Catalog Optimization</li>
              <li>Advertising</li>
              <li>Compliance</li>
              <li>FBA & Logistics</li>
              <li>Global Expansion</li>
            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+91-9671513716</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>[scalionglobal@gmail.com]</span>
              </div>


            </div>

            <div className="flex gap-4 mt-8">

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A2540] transition">
                <FaLinkedinIn />
              </div>

              <a
                href="https://www.instagram.com/scalionglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-black hover:bg-[#C9A45C] hover:text-[#071B3B] transition"
              >
                <FaInstagram />
              </a>

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A2540] transition">
                <FaFacebookF />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Scalion Global. All Rights Reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0 text-gray-500">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;