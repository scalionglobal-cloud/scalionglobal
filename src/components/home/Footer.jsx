import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#04142D]">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold">
              Scalion
            </h2>

            <p className="tracking-[4px] text-sm text-gray-500 mt-1">
              GLOBAL
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Helping brands scale across global marketplaces through
              strategy, operations, technology, logistics, and marketplace
              expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#C9A45C] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#C9A45C] transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-[#C9A45C] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="hover:text-[#C9A45C] transition"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#C9A45C] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-600">
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

            <div className="space-y-5 text-gray-600">
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 96715 13716</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>scalionglobal@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#C9A45C] hover:text-[#071B3B] transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/scalionglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#C9A45C] hover:text-[#071B3B] transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 Scalion Global. All Rights Reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0 text-gray-500">
            <Link
              to="/pricing"
              className="hover:text-[#C9A45C] transition"
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#C9A45C] transition"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;