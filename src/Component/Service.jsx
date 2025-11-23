import React from "react";
import delivery from "../assets/delivery.jpg";
import warehousing from "../assets/warehousing.jpg";
import tracking from "../assets/tracking.jpg";
import consulting from "../assets/consulting.jpg";
import about from "../assets/about.jpg";

export default function Services() {
  const services = [
    {
      title: "Fast Delivery",
      description:
        "Reliable and on-time delivery services across local and international routes.",
      image: delivery,
    },
    {
      title: "Warehousing & Storage",
      description:
        "Secure and organized warehousing solutions tailored to your business needs.",
      image: warehousing,
    },
    {
      title: "Shipment Tracking",
      description:
        "Real-time shipment tracking to keep you informed every step of the way.",
      image: tracking,
    },
    {
      title: "Logistics Consulting",
      description:
        "Expert guidance to optimize your supply chain and reduce operational costs.",
      image: consulting,
    },
  ];

  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${about})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
            We offer a range of logistics solutions designed to streamline your
            supply chain and grow your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to streamline your logistics?
          </h2>
          <p className="text-xl mb-8">
            Partner with SWIFTMOVE today for reliable, efficient, and
            technology-driven logistics solutions.
          </p>
          <button className="px-8 py-4 bg-green-400 text-gray-900 font-bold rounded-full hover:bg-green-500 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
