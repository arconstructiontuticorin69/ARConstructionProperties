import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section className="relative bg-gray-900 text-white py-24 px-6 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40"></div>

      <motion.div
        className="relative max-w-5xl mx-auto text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-yellow-400 uppercase tracking-widest font-semibold text-sm mb-4">
          Welcome to BuildRight Constructions
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          We are a passionate team of builders shaping{" "}
          <span className="block text-yellow-400">
            strong foundations for the future.
          </span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl">
          From modern infrastructure to dream homes, we deliver reliable, safe,
          and innovative construction solutions built to last.
        </p>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
