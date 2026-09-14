const PricingCTA = () => {
  return (
    <section className="py-24 bg-[#071B3B]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="text-[#C9A45C] text-xl md:text-2xl font-bold uppercase tracking-[3px] mb-4">
          Ready To Scale?
        </span>

        <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
          Let's Grow Your Brand Together
        </h2>

        <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto">
          Whether you're launching your first product or scaling across
          multiple marketplaces, our experts are ready to help you achieve
          sustainable growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

          <a
            href="https://wa.me/919671513716?text=Hello%20Scalion%20Global,%20I%20would%20like%20to%20discuss%20a%20marketplace%20growth%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A45C] text-[#071B3B] px-8 py-4 rounded-full font-semibold hover:bg-[#d6b36f] transition-all duration-300 shadow-lg"
          >
            Book Free Consultation
          </a>

          <a
            href="/brochure.pdf"
            download
            className="border-2 border-[#C9A45C] text-[#C9A45C] px-8 py-4 rounded-full font-semibold hover:bg-[#C9A45C] hover:text-[#071B3B] transition-all duration-300"
          >
            Download Brochure
          </a>

        </div>

      </div>
    </section>
  );
};

export default PricingCTA;