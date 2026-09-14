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

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await emailjs.sendForm(
        "service_g5ozqin",
        "template_47yhdn7",
        form.current,
        "tZjTtEnVsQMx0UNXT"
      );

      console.log("SUCCESS!", result.text);

      setSuccess(true);
      form.current.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        error?.text ||
          error?.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#071C3C] relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[200px] bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* LEFT SIDE */}
          <div>
            <p className="text-[#C9A45C] text-xl md:text-2xl font-bold uppercase tracking-[3px] mb-4">
              Let's Connect
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
              Ready to Scale
              <br />
              Your Brand
              <br />
              Beyond Borders?
            </h2>

            <div className="w-16 h-[2px] bg-[#D4AF37] mt-10"></div>

            <p className="mt-8 text-white/70 text-base md:text-lg leading-7 md:leading-8">
              Let's discuss how Scalion Global can help your business
              grow across marketplaces and global eCommerce channels.
            </p>
          </div>

          {/* FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 max-w-xl mx-auto lg:max-w-none"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="bg-white/5 border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white outline-none placeholder:text-white/50 w-full"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="bg-white/5 border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white outline-none placeholder:text-white/50 w-full"
              />
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                name="phone"
                required
                placeholder="Phone Number"
                className="bg-white/5 border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white outline-none placeholder:text-white/50 w-full"
              />

              <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                className="bg-white/5 border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white outline-none placeholder:text-white/50 w-full"
              />
            </div>

            {/* Business Type & Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <select
                name="business_type"
                required
                className="bg-white/5 border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white outline-none w-full"
              >
                <option value="" className="text-black">
                  Select Business Type
                </option>
                <option value="E-Commerce" className="text-black">
                  E-Commerce
                </option>
                <option value="Retail Brand" className="text-black">
                  Retail Brand
                </option>
                <option value="Manufacturer" className="text-black">
                  Manufacturer
                </option>
                <option value="Startup" className="text-black">
                  Startup
                </option>
                <option value="Distributor" className="text-black">
                  Distributor
                </option>
              </select>

              <select
                name="service"
                required
                className="bg-white/5 border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white outline-none w-full"
              >
                <option value="" className="text-black">
                  Select Service
                </option>
                <option value="Marketplace Management" className="text-black">
                  Marketplace Management
                </option>
                <option value="Catalog Optimization" className="text-black">
                  Catalog Optimization
                </option>
                <option value="Advertising" className="text-black">
                  Advertising
                </option>
                <option value="Compliance" className="text-black">
                  Compliance
                </option>
                <option value="FBA & Logistics" className="text-black">
                  FBA & Logistics
                </option>
                <option value="Global Expansion" className="text-black">
                  Global Expansion
                </option>
              </select>
            </div>
                        {/* Message */}
            <textarea
              rows="4"
              name="message"
              required
              placeholder="Tell us about your business goals..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white outline-none placeholder:text-white/50 resize-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                sm:w-auto
                min-w-[220px]
                bg-[#D4AF37]
                text-[#0A2540]
                font-semibold
                px-6
                md:px-8
                py-3
                md:py-4
                rounded-xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {success && (
              <p className="text-green-400 font-medium mt-3">
                Message sent successfully!
              </p>
            )}
          </form>

          {/* CONTACT INFO */}
          <div>
            <div className="space-y-6 md:space-y-8 mt-10 lg:mt-0">

              <a
                href="tel:+919671513716"
                className="flex gap-4 items-center group"
              >
                <Phone className="text-[#D4AF37]" />
                <span className="text-white group-hover:text-[#D4AF37] transition">
                  +91 96715 13716
                </span>
              </a>

              <div className="flex gap-4 items-start">
                <Mail className="text-[#D4AF37]" />
                <div className="text-white">
                  <p>contact@scalionglobal.com</p>
                  <p className="break-all">
                    scalionglobal@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-[#D4AF37] mt-1" />

                <span className="text-white leading-7">
                  1109, Guru Arjun Nagar,
                  <br />
                  Yamunanagar,
                  <br />
                  Haryana, India - 135001
                </span>
              </div>

            </div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;