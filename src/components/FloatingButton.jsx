import React from "react";
import { FaWhatsapp, FaFilePdf } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-4">

      {/* Download Brochure */}
      <a
          href="/brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            floating-btn
            w-14 h-14
            rounded-full
            bg-[#C9A45C]
            text-white
            flex items-center
            justify-center
            shadow-xl
            hover:scale-110
            transition-all
            duration-300
          "
          title="Download Brochure"
        >
          <FaFilePdf size={24} />
        </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919671513716"
        target="_blank"
        rel="noopener noreferrer"
        className="
          floating-btn
          w-14 h-14
          rounded-full
          bg-[#25D366]
          text-white
          flex items-center
          justify-center
          shadow-xl
          hover:scale-110
          transition-all
          duration-300
        "
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

    </div>
  );
};

export default FloatingButton;