import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="lg:pt-8">

      {/* Heading */}
      <span className="text-[#C9A45C] text-sm md:text-xl font-bold uppercase tracking-[3px]">
        Contact Information
      </span>

      <h3 className="mt-4 text-4xl md:text-5xl font-serif text-[#071B3B]">
        Let's Connect
      </h3>

      <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
        Reach out through any of the channels below and our team
        will get back to you within 24 hours.
      </p>

      <div className="w-16 h-[2px] bg-[#C9A45C] mt-8 mb-10"></div>

      {/* Contact Details */}

      <div className="space-y-6">

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#071B3B] text-white flex items-center justify-center">
            <Phone size={20} />
          </div>

          <div>
            <h4 className="font-semibold text-[#071B3B]">
              Phone
            </h4>

            <p className="text-gray-600">
              +91 96715 13716
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#071B3B] text-white flex items-center justify-center">
            <Mail size={20} />
          </div>

          <div>
            <h4 className="font-semibold text-[#071B3B]">
              Email
            </h4>

            <p className="text-gray-600">
              info@scalionglobal.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#071B3B] text-white flex items-center justify-center">
            <MapPin size={20} />
          </div>

          <div>
            <h4 className="font-semibold text-[#071B3B]">
              Location
            </h4>

            <p className="text-gray-600">
              India • Global Operations
            </p>
          </div>
        </div>

      </div>

      {/* Consultation Card */}

      <div className="mt-12 rounded-[30px] bg-[#071B3B] p-6 md:p-8 shadow-xl">

        <p className="uppercase tracking-[3px] text-[#C9A45C] text-xs md:text-sm mb-3">
          Quick Response
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Schedule a 30-Minute Consultation
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          Discuss your marketplace goals, growth strategy and
          expansion opportunities with our experts.
        </p>

        <a
          href="https://wa.me/919671513716"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#C9A45C] text-[#071B3B] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
        >
          Book A Call
        </a>

      </div>

    </div>
  );
};

export default ContactInfo;