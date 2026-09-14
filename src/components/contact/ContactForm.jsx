import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactInfo from "./ContactInfo";

const ContactForm = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_efm8d6q",
      "template_aozquqq",
      form.current,
      "ma6f1G8xKopMd_Ix0"
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
          setLoading(false);

          console.log("EMAILJS ERROR:", error);
          console.log("STATUS:", error.status);
          console.log("TEXT:", error.text);

          alert(error.text);
        }
      );
  };

  return (
    <section className="bg-[#F8FAFC] relative z-20 pt-16 md:pt-20 pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* FORM */}
          <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-xl p-6 md:p-10">

            <h2 className="text-3xl md:text-4xl font-bold text-[#071B3B]">
              Let's Start a Conversation
            </h2>

            <p className="mt-4 text-gray-600">
              Tell us about your business and growth goals.
            </p>

            <form ref={form} onSubmit={sendEmail}>

              <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                  className="h-12 md:h-14 px-4 md:px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C] transition-all"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="h-12 md:h-14 px-4 md:px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C] transition-all"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="h-12 md:h-14 px-4 md:px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C] transition-all"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="h-12 md:h-14 px-4 md:px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C] transition-all"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-4 md:mt-5">

                <select
                  name="business_type"
                  required
                  className="w-full h-12 md:h-14 px-4 md:px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C] transition-all"
                >
                  <option value="">Select Business Type</option>
                  <option>Manufacturer</option>
                  <option>Brand Owner</option>
                  <option>Distributor</option>
                  <option>Wholesaler</option>
                  <option>Retailer</option>
                  <option>D2C Brand</option>
                  <option>Startup</option>
                  <option>Exporter</option>
                  <option>Other</option>
                </select>

                <select
                  name="service"
                  required
                  className="w-full h-12 md:h-14 px-4 md:px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C] transition-all"
                >
                  <option value="">Select Service</option>
                  <option>Marketplace Management</option>
                  <option>Cataloging</option>
                  <option>Brand Growth</option>
                  <option>Global Expansion</option>
                  <option>Amazon Account Management</option>
                  <option>Flipkart Account Management</option>
                  <option>PPC Advertising</option>
                  <option>Product Listing Optimization</option>
                </select>

              </div>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full mt-4 md:mt-5 p-4 md:p-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C] transition-all"
              />
                            <button
                type="submit"
                disabled={loading}
                className="
                  mt-6 md:mt-8
                  w-full md:w-auto
                  bg-[#071B3B]
                  text-white
                  px-8
                  py-3 md:py-4
                  rounded-full
                  font-semibold
                  hover:bg-[#0E295A]
                  transition-all
                  duration-300
                "
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              {success && (
                <div className="mt-5 rounded-xl bg-green-50 border border-green-200 text-green-700 px-4 py-3">
                  Message sent successfully!
                </div>
              )}

            </form>

          </div>

          {/* CONTACT INFO */}
          <ContactInfo />

        </div>

      </div>
    </section>
  );
};

export default ContactForm;