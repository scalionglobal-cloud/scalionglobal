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

    emailjs.sendForm(
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
          setLoading(false);

          console.log("EMAILJS ERROR:", error);
          console.log("STATUS:", error.status);
          console.log("TEXT:", error.text);

          alert(error.text);
        }
      );
  };

  return (
    <section className="bg-[#F8FAFC] relative z-20 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* FORM */}
          <div className="bg-white rounded-[40px] shadow-xl p-10">

            <h2 className="text-4xl font-bold text-[#071B3B]">
              Let's Start a Conversation
            </h2>

            <p className="mt-4 text-gray-600">
              Tell us about your business and growth goals.
            </p>

            <form ref={form} onSubmit={sendEmail}>

              <div className="grid md:grid-cols-2 gap-5 mt-10">

                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                  className="h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C]"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                  className="h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C]"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C]"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C]"
                />

              </div>

              <select
                name="service"
                required
                className="w-full mt-5 h-14 px-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C]"
              >
                <option value="">Select Service</option>
                <option>Marketplace Management</option>
                <option>Cataloging</option>
                <option>Brand Growth</option>
                <option>Global Expansion</option>
              </select>

              <textarea
                rows="6"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full mt-5 p-5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#C9A45C]"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-8 bg-[#071B3B] text-white px-8 py-4 rounded-full hover:bg-[#0E295A] transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              {success && (
                <div className="mt-5 text-green-600 font-medium">
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