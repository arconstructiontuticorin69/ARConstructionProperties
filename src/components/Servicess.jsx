import React from "react";
import { motion } from "framer-motion";

function Servicess() {
  const services = [
    {
      title: "Construction",
      desc: "We deliver residential, commercial, and industrial projects with quality craftsmanship and precision.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Interior Design",
      desc: "Elegant, functional, and modern interior designs that transform your spaces beautifully.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Renovation",
      desc: "Breathing new life into old spaces with top-tier renovation and remodeling services.",
      image:
        "https://images.unsplash.com/photo-1581091012184-5c8af66a0a9a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Real Estate",
      desc: "Trusted real estate consultation for buying, selling, and developing properties.",
      image:
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Property Management",
      desc: "Comprehensive property management services ensuring your assets are always maintained and secure.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-10 bg-[#080838] text-white rounded-[40px] mb-20 mt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-yellow-300">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-2xl bg-white text-gray-800 shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(255,255,255,0.7)",
                transition: { duration: 0.4 },
              }}
            >
              {/* Background image on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#080838] transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-50"></div>
    </section>
  );
}

export default Servicess;
