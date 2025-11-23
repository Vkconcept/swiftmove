import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import aboutImg from "../assets/about.jpg";
import { Truck, Globe, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Fast & Reliable",
      text: "We ensure timely deliveries with efficient logistics management.",
      icon: <Clock className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Global Reach",
      text: "Our logistics solutions connect businesses locally and internationally.",
      icon: <Globe className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Expert Team",
      text: "Skilled professionals handle your shipments with care and precision.",
      icon: <Truck className="w-10 h-10 text-green-400" />,
    },
  ];

  const testimonials = [
    {
      name: "Jane Doe",
      position: "CEO, Global Traders",
      quote:
        "SwiftMove has transformed our supply chain. Reliable, fast, and always professional.",
    },
    {
      name: "John Smith",
      position: "Operations Manager, Fresh Foods Ltd",
      quote:
        "Their team handles every shipment with care. We can trust them with our most critical deliveries.",
    },
    {
      name: "Mary Johnson",
      position: "Founder, EcoGoods",
      quote:
        "SwiftMove’s logistics solutions are innovative and efficient. Our business growth has been remarkable.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center pt-20 space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Delivering Reliable
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              Logistics Solutions
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            We provide complete logistics solutions that connect businesses,
            streamline trade, and drive growth
          </p>
          <button
            onClick={() => navigate("/quote")}
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 text-lg font-bold rounded-full hover:from-green-500 hover:to-green-600 transition transform hover:scale-105 shadow-2xl shadow-green-500/50"
          >
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImg}
              alt="About Us"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              At SwiftMove, we deliver advanced logistics solutions built for
              speed, reliability, and efficiency. Our expert team uses modern
              technology to ensure shipments arrive safely and on time while
              providing tailored solutions for businesses of all sizes.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-3 bg-green-400 text-gray-900 font-bold rounded-full hover:bg-green-500 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            SwiftMove offers reliable, innovative, and customer-focused
            logistics solutions that help your business grow locally and
            globally.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from some of the businesses we’ve helped streamline their
            logistics.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <h3 className="text-xl font-bold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
