import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-[#C9A45C] font-semibold"
      : "text-[#0A2540] hover:text-[#C9A45C] transition duration-300";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Scalion Global"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/services" className={navClass}>
            Services
          </NavLink>

          <NavLink to="/pricing" className={navClass}>
            Pricing
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/919671513716"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex bg-[#071B3B] text-white px-6 py-3 rounded-full items-center gap-3 font-semibold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <FaWhatsapp className="text-green-500 text-xl" />
          Contact on WhatsApp
          <ArrowRight size={18} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#071B3B]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="flex flex-col px-6 py-5 space-y-5">

            <NavLink
              to="/"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/pricing"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </NavLink>

            <NavLink
              to="/about"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <a
              href="https://wa.me/919671513716"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#071B3B] text-white py-3 px-5 rounded-full flex items-center justify-center gap-3 font-semibold mt-2"
            >
              <FaWhatsapp className="text-green-500 text-xl" />
              Contact on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

