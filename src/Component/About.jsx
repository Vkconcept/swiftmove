import React from "react";
import about from "../assets/about.jpg";
import logistics from "../assets/logistics.jpg";
import mission from "../assets/mission.jpg";
export default function About() {
  return (
    <>
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
            About Us
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
            We provide more than logistics we’re a dependable partner dedicated
            to streamlining your supply chain and helping your business grow
            globally.
          </p>
        </div>
      </section>
      {/* Who We Are Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={logistics}
                alt="Warehouse Operations"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black-900 mb-6">
                Who We Are
              </h2>
              <p className="text-black-600 text-lg mb-6 leading-relaxed">
                At <span className="font-bold text-green-900">SwiftMove</span>,
                we deliver advanced logistics solutions built for speed,
                reliability, and efficiency. Our skilled team uses modern
                technology and industry expertise to ensure your cargo arrives
                safely and on schedule.
              </p>
              <p className="text-black-600 text-lg leading-relaxed">
                We focus on strong operational performance and a customer-first
                approach, offering tailored services for companies of every
                size. Whether supporting international corporations or local
                businesses, our mission is to streamline your supply chain and
                power your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Mission Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={mission}
                alt="Warehouse Operations"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div>
              <h4 className="text-2xl md:text-5xl font-bold text-black-900 mb-6">
                MISSION
              </h4>
              <p className="text-black-600 text-lg mb-6 leading-relaxed">
                Our mission at
                <span className="font-bold text-green-900"> SwiftMove</span>, is
                to deliver fast, reliable, and technology-driven logistics
                solutions that connect businesses to opportunity. We are
                committed to operational excellence, customer-focused service,
                and continuous innovation, ensuring safe, timely, and efficient
                delivery for companies of all sizes while empowering growth
                across local and global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-12 md:p-16 text-center">
            <p className="text-green-400 font-semibold mb-4 uppercase tracking-wide">
              Partner With Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Shape the Future of Logistics
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              No matter your logistics requirements, SWIFTMOVE delivers the
              reliability, expertise, and premium service your business
              deserves.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 text-lg font-bold rounded-full hover:from-green-500 hover:to-green-600 transition transform hover:scale-105 shadow-2xl">
              Email Us Today
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
