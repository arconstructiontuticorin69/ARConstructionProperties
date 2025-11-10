import React, { useState } from "react";
const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-[#080838] to-[#101088] text-white shadow-lg mb-32">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items- center">
        <div className="text-2xl font-extrabold tracking-wide text-stone-100 drop-shadow-sm">
          <span className="text-amber-200">AR</span> Constructions
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-[#E8EDF7] cursor-pointer">Home</li>
          <li className="hover:text-[#E8EDF7] cursor-pointer">Services</li>
          <li className="hover:text-[#E8EDF7] cursor-pointer">Contact</li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none" //md:hidden - for mobile
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-charcoal text-center py-4 space-y-4 md:hidden ">
          <li className="hover:bg-[#6E6B66] cursor-pointer py-2">Home</li>

          <li className="hover:bg-[#6E6B66] cursor-pointer py-2">Services</li>
          <li className="hover:bg-[#6E6B66] cursor-pointer py-2">Contact</li>
        </ul>
      )}
    </nav>
  );
};
export default Navbarr;
