import React from "react";
const Mottosections = () => {
  const mottoPoints = [
    {
      title: "Focused on Quality",
      description:
        "Every project we undertake reflects our unwavering commitment to top-notch quality standards.",
    },
    {
      title: "Skilled Craftsmanship",
      description:
        "Our team is composed of experienced professionals who take pride in every detail.",
    },
    {
      title: "Premium Materials",
      description:
        "We use only tested and certified materials because your structure deserves the best.",
    },
    {
      title: "On-Time, Zero Compromise",
      description:
        "We deliver on time without cutting corners. Deadlines are met — but never at the cost of quality.",
    },
    {
      title: "Modern Techniques",
      description:
        "From planning to execution, we adopt the latest technology to ensure precision and durability.",
    },
    {
      title: "Transparent Process",
      description:
        "From estimate to execution, we maintain complete transparency so you are informed at every step.",
    },
  ];
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Motto</h2>
        <p className="text-gray-600 text-lg mb-12">
          At{" "}
          <span className="text-blue-700 font-semibold">AR Constructions</span>,
          we live by principles that ensure every project stands the test of
          time.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {mottoPoints.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg border-t-4 border-blue-700 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Mottosections;
