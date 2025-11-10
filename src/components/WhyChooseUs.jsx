import React from "react";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  const cards = [
    {
      title: "Trusted Expertise",
      desc: "With years of experience, our skilled professionals ensure top-notch quality in every project.",
    },
    {
      title: "On-Time Delivery",
      desc: "We value your time and commit to completing projects within deadlines without compromising quality.",
    },
    {
      title: "Innovative Designs",
      desc: "Our designs blend creativity and functionality for modern, sustainable construction.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#080838] to-[#101088] py-10 rounded-[40px] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 8px rgba(255, 255, 200, 0.8)",
            transition: { duration: 0.3 },
          }}
        >
          Why Choose <span className="text-yellow-300">Us?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white text-[#080838] rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(255, 255, 255, 0.4)",
                transition: { duration: 0.4 },
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#080838]">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-50"></div>
    </section>
  );
};
export default WhyChooseUs;
