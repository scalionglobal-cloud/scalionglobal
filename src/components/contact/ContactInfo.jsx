import React from "react";

const ContactInfo = () => {
  return (
    <div className="lg:pt-8">

      <span className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold">
        Contact Information
      </span>

      <h3 className="mt-4 text-5xl font-serif text-[#071B3B]">
        Let's Connect
      </h3>

      <p className="mt-6 text-gray-600 leading-relaxed max-w-md">
        Reach out through any of the channels below and our team
        will get back to you within 24 hours.
      </p>

      <div className="w-16 h-[2px] bg-[#C9A45C] mt-8 mb-10"></div>

    

      {/* Consultation Card */}

      <div className="mt-12 rounded-[30px] bg-[#071B3B] p-8 shadow-xl">

        <p className="uppercase tracking-[3px] text-[#C9A45C] text-sm mb-3">
          Quick Response
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">
          Schedule a 30-Minute Consultation
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          Discuss your marketplace goals, growth strategy and
          expansion opportunities with our experts.
        </p>

        <button className="bg-[#C9A45C] text-[#071B3B] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
          Book A Call 
        </button>

      </div>

    </div>  
  );
};

export default ContactInfo;