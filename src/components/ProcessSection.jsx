import React from "react";
import { motion } from "framer-motion";
import {
  FaComments,
  FaClipboardList,
  FaDraftingCompass,
  FaHardHat,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaComments />,
    title: "Consultation",
    desc: "Understanding your requirements and ideas.",
    color: "text-green-600 border-green-400 hover:border-green-600",
  },
  {
    icon: <FaClipboardList />,
    title: "Planning",
    desc: "Preparing timelines and detailed project scope.",
    color: "text-yellow-500 border-yellow-400 hover:border-yellow-600",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Design & Estimate",
    desc: "Creating detailed designs and cost estimates.",
    color: "text-orange-500 border-orange-400 hover:border-orange-600",
  },
  {
    icon: <FaHardHat />,
    title: "Execution",
    desc: "Bringing the plan to life with skilled craftsmanship.",
    color: "text-blue-600 border-blue-400 hover:border-blue-600",
  },
  {
    icon: <FaHome />,
    title: "Final Delivery",
    desc: "Delivering your dream project with quality assurance.",
    color: "text-purple-600 border-purple-400 hover:border-purple-600",
  },
];

const ProcessSection = () => {
  return (
    <section className="pt-8 pb-28 bg-white text-[#002349] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-yellow-500">Our Construction Process</span>
        </motion.h2>

        <div className="relative flex flex-wrap justify-center items-start gap-x-10 gap-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center w-40 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Animated dotted circle */}
              <motion.div
                className={`relative w-24 h-24 rounded-full border-[6px] border-dashed ${step.color} flex items-center justify-center mb-4 transition-all duration-300`}
                whileHover={{ rotate: 10, scale: 1.08 }}
              >
                <motion.div
                  className={`text-3xl ${step.color.split(" ")[0]}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.icon}
                </motion.div>
              </motion.div>

              {/* Step content */}
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>

              {/* Connector with Arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute right-[-50px] top-[45px] items-center justify-between w-20">
                  <div className="h-[2px] w-full bg-gray-300 relative"></div>
                  <FaArrowRight className="text-black-400 text-lg absolute right-[-18px] top-[-8px]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
