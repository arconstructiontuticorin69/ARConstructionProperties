import React from "react";
import { motion } from "framer-motion";

import Trophy from "../assets/Images/Trophy-1.jpeg";
import SalemRR1 from "../assets/Images/SalemRR-Award.jpeg";
import SalemRR2 from "../assets/Images/Tuty-SalemRR.jpeg";
import SalemRR3 from "../assets/Images/Tuty-SalemRRRecog.jpeg";

export default function AchievementsSection() {
  return (
    <section className="pt-0 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#002349] mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Achievements
        </motion.h2>

        {/* Single award title */}
        <p className="text-lg text-gray-600 mb-12 font-bold">
          Revolutionary Construction Award
        </p>

        {/* Images */}
        <motion.div
          className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide snap-x snap-mandatory"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[Trophy, SalemRR1, SalemRR2, SalemRR3].map((img, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 snap-center rounded-xl overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img}
                alt="Award moments"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
