import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Phone,
  Mail,
  MapPin,
  Globe,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_g5ozqin",
        "template_47yhdn7",
        form.current,
        "tZjTtEnVsQMx0UNXT"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        },
        (error) => {
          console.error(error);
          setLoading(false);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="bg-[#071C3C] relative overflow-hidden py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[200px] bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-semibold mb-8">
              Let's Connect
            </p>

            <h2 className="text-5xl font-serif text-white leading-tight">
              Ready to Scale
              <br />
              Your Brand
              <br />
              Beyond Borders?
            </h2>

            <div className="w-16 h-[2px] bg-[#D4AF37] mt-10"></div>

            <p className="mt-8 text-white/70 text-lg leading-8">
              Let's discuss how Scalion Global can help your business
              grow across marketplaces and global eCommerce channels.
            </p>

          </div>

          {/* FORM */}
          <div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none placeholder:text-white/50 w-full"
                />

                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none placeholder:text-white/50 w-full"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none placeholder:text-white/50 w-full"
                />

                <select
                  name="business_type"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none w-full"
                >
                  <option value="" className="text-black">
                    Business Type
                  </option>

                  <option className="text-black">
                    E-Commerce
                  </option>

                  <option className="text-black">
                    Retail Brand
                  </option>

                  <option className="text-black">
                    Manufacturer
                  </option>

                  <option className="text-black">
                    Startup
                  </option>

                </select>

              </div>

              <textarea
                rows="5"
                name="message"
                required
                placeholder="Tell us about your business goals..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none placeholder:text-white/50"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#D4AF37] text-[#0A2540] font-semibold px-8 py-4 rounded-xl hover:scale-105 transition duration-300"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              {success && (
                <p className="text-green-400 font-medium mt-3">
                  Message sent successfully!
                </p>
              )}

            </form>

          </div>

          {/* CONTACT INFO */}
          <div>

            <div className="space-y-8">

              <a
                href="tel:+919876543210"
                className="flex gap-4 items-center group"
              >
                <Phone className="text-[#D4AF37]" />
                <span className="text-white group-hover:text-[#D4AF37] transition">
                  +91 98765 43210
                </span>
              </a>

              <a
                href="mailto:contact@scalionglobal.com"
                className="flex gap-4 items-center group"
              >
                <Mail className="text-[#D4AF37]" />
                <span className="text-white group-hover:text-[#D4AF37] transition">
                  contact@scalionglobal.com
                </span>
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-start group"
              >
                <MapPin className="text-[#D4AF37] mt-1" />

                <span className="text-white group-hover:text-[#D4AF37] transition">
                  B-201 Corporate Tower,
                  <br />
                  Sector 62, Noida, India
                </span>
              </a>

            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-12">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A2540] transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A2540] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://scalionglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A2540] transition"
              >
                <Globe size={18} />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;