import React from "react";
function Herosections() {
  return (
    <section className="relative mt-20 h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden text-white">
      <img
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
        alt="construction site"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-600/70 to-gray-900/70 -z-10"></div>
      <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
        We Don't Just Build Structures,We Build Trust!
      </h1>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        At <span className="font-semibold">AR Constructions</span>, we deliver
        reliable, modern, and sustainable infrastructure solutions with
        precision and passion.
      </p>
      <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
        Explore Our Projects
      </button>
    </section>
  );
}
export default Herosections;
