import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBuilding, FaPaintRoller, FaCouch, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SERVICE_LIST = [
  {
    icon: <FaBuilding />,
    title: "Construction",
    quote: "Building dreams brick by brick",
  },
  {
    icon: <FaPaintRoller />,
    title: "Renovation",
    quote: "Transforming spaces beautifully",
  },
  {
    icon: <FaCouch />,
    title: "Interior",
    quote: "Designs that define you",
  },
  {
    icon: <FaHome />,
    title: "Real Estate",
    quote: "Finding your perfect space",
  },
  {
    icon: <FaHome />,
    title: "Properties",
    quote: "Invest smart, live smarter",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="services"
      className="pt-16 pb-20 bg-[rgba(0,35,73,0.95)] text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICE_LIST.map((s, index) => {
            const card = (
              <motion.div
                key={index}
                className="bg-[rgba(255,255,255,0.05)] min-h-[220px] p-6 rounded-xl flex flex-col items-center text-center gap-3 transition-all duration-300"
                animate={
                  isInView
                    ? {
                        x: [0, 10, 0, -10, 0],
                        transition: {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        },
                      }
                    : { x: 0 }
                }
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(173,216,230,0.3)",
                  transition: { duration: 0.15, ease: "easeOut" },
                }}
              >
                {/* ICON ANIMATION */}
                <motion.div
                  className="text-5xl text-yellow-400"
                  animate={
                    isInView
                      ? {
                          y: [0, -8, 0],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.4,
                          },
                        }
                      : { y: 0 }
                  }
                >
                  {s.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg">{s.title}</h3>

                {/* QUOTE LINE */}
                <p className="text-gray-300 text-sm italic">{s.quote}</p>
              </motion.div>
            );
            return (
              <div className="relative" key={index}>
                <Link to={`/service/${s.title.toLowerCase()}`}>{card}</Link>

                {/* ⭐ Inside bottom-center */}
                <div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 
                    bg-yellow-500 text-black text-xs px-3 py-1 
                    rounded-md font-semibold shadow"
                >
                  View Images
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
