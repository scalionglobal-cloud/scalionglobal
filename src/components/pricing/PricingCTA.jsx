import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What marketplaces do you support?",
    answer:
      "We support Amazon, Flipkart, Myntra, Ajio, Shopify, Walmart, Etsy and other leading global marketplaces.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. As your business grows, you can easily upgrade or customize your plan at any time.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Absolutely. Enterprise plans are tailored according to your business requirements and growth goals.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most clients are onboarded within 3–7 business days depending on the scope of work.",
  },
  {
    question: "Can you manage my marketplace account completely?",
    answer:
      "Yes. Our team can handle everything from listings and catalogs to advertising and account management.",
  },
  {
    question: "Do you support international expansion?",
    answer:
      "Yes. We help brands expand into global marketplaces with compliance, logistics, and localization support.",
  },
];

const FAQPricing = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-[#C9A45C] text-sm font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-5xl font-bold text-[#0A2540]">
            Everything You Need To Know
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Have questions? We've got answers.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] rounded-3xl overflow-hidden border border-gray-100"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-7 text-left"
              >
                <h3 className="text-lg font-semibold text-[#0A2540]">
                  {faq.question}
                </h3>

                <div className="text-[#0A2540]">
                  {active === index ? (
                    <Minus size={22} />
                  ) : (
                    <Plus size={22} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  active === index
                    ? "max-h-40 pb-7 px-7"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQPricing;