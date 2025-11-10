import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import interior1 from "../assets/Images/Interior-1.jpeg";
import interior2 from "../assets/Images/Interior-2.jpeg";
import interior3 from "../assets/Images/Interior-3.jpeg";
import interior4 from "../assets/Images/Interior-4.jpeg";
import interior5 from "../assets/Images/Interior-5.jpeg";
import interior6 from "../assets/Images/Interior-6.jpeg";
import interior7 from "../assets/Images/Interior-7.jpeg";
import interior8 from "../assets/Images/Interior-8.jpeg";

const InteriorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    interior1,
    interior2,
    interior3,
    interior4,
    interior5,
    interior6,
    interior7,
    interior8,
  ];

  const handleBackClick = () => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  // ✨ Animation Variants for Parent & Children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // smooth sequential loading
        delayChildren: 0.3, // wait a bit before first image starts
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#002349] mb-12"
        >
          Interior Design Works
        </motion.h2>

        {/* ✅ Grid with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <motion.img
                src={img}
                alt={`interior-${index}`}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: images.length * 0.25 + 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <motion.button
            onClick={handleBackClick}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(0, 0, 255, 0.4)",
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-[#002349] text-[#FFD700] rounded-xl font-medium shadow-md hover:bg-blue-900 transition"
          >
            <motion.span
              animate={{ x: [0, -4, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <FaArrowLeft className="text-[#FFD700] text-lg" />
            </motion.span>
            Back to Services
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InteriorPage;
