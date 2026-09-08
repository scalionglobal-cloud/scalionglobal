import { motion } from "framer-motion";

const stats = [
  {
    number: "5000+",
    label: "Products Managed",
  },
  {
    number: "50+",
    label: "Brands Empowered",
  },
  {
    number: "20+",
    label: "Countries Served",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
];

const Stats = () => {
  return (
    <section className="bg-[#071C3C] relative overflow-hidden">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] -top-60 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[180px] -bottom-60 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center lg:text-left border-r border-white/10 last:border-none"
            >
              <h3 className="text-5xl font-serif text-[#D4AF37]">
                {item.number}
              </h3>

              <p className="text-white/80 mt-4 text-lg">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;