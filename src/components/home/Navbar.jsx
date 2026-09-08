import { ArrowRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-[#C9A45C] font-semibold"
      : "text-[#0A2540] hover:text-[#C9A45C] transition duration-300";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Scalion Global"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
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

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:flex items-center gap-2 bg-[#C9A45C] text-[#071B3B] px-6 py-3 rounded-full font-medium hover:bg-[#d6b36f] transition duration-300"
        >
          Book a Call
          <ArrowRight size={18} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;