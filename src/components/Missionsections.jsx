import React from "react";
const Missionsections = () => {
  return (
    <section className="relative bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 text-lg mb-10">
          At{" "}
          <span className="font-semibold text-blue-700">AR Constructions</span>,
          our mission is to build lasting relationships through honesty,
          quality, and innovation. We strive to deliver excellence in every
          project while ensuring sustainability and safety at every stage.
        </p>

        {/* Optional mission highlight cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Integrity
            </h3>
            <p className="text-gray-600">
              We believe in transparency and fairness in all our business
              dealings.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Quality
            </h3>
            <p className="text-gray-600">
              Our team ensures top-tier craftsmanship using the best materials.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Innovation
            </h3>
            <p className="text-gray-600">
              We embrace modern technologies and creative designs to redefine
              construction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Missionsections;
