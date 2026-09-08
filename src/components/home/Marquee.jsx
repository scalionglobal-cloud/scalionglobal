const Marquee = () => {
  return (
    <section className="bg-[#0A0F1C] py-6 overflow-hidden">

      <div className="marquee whitespace-nowrap">

        <div className="marquee-content">

          <span>Marketplace Management ✦</span>
          <span>eCommerce Growth ✦</span>
          <span>Catalog Optimization ✦</span>
          <span>Amazon Advertising ✦</span>
          <span>Shopify Development ✦</span>
          <span>Digital Transformation ✦</span>
          <span>Business Intelligence ✦</span>
          <span>AI Automation ✦</span>

          {/* Duplicate for infinite effect */}

          <span>Marketplace Management ✦</span>
          <span>eCommerce Growth ✦</span>
          <span>Catalog Optimization ✦</span>
          <span>Amazon Advertising ✦</span>
          <span>Shopify Development ✦</span>
          <span>Digital Transformation ✦</span>
          <span>Business Intelligence ✦</span>
          <span>AI Automation ✦</span>

        </div>

      </div>

    </section>
  );
};

export default Marquee;