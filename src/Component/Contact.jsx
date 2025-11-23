import React, { useState } from "react";
import about from "../assets/about.jpg";

export default function Contact() {
  const [formType, setFormType] = useState("individual");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your message has been sent as a ${formType}!`);
    setFormData({ fullName: "", email: "", message: "" });
  };

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
            Connect with Us
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
            Contact us for inquiries, quotes, or to discuss partnership
            opportunities.
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-8">
                At <span className="font-bold text-green-900">SwiftMove</span>,
                We are always available to support your logistics requirements.
                Reach out by phone, email, or through the form, and we’ll get
                back to you promptly. Our team is ready to assist with quotes,
                service details, and any questions you may have.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Phone:</h3>
                  <p className="text-black-700">08176860084</p>
                </div>

                <div>
                  <h3 className="font-bold text-black-900 mb-2">Email:</h3>
                  <p className="text-black-700">sales@SwiftMove.com</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Website:</h3>
                  <p className="text-black-700">www.SwiftMove.com</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Company:</h3>
                  <p className="text-black-700">SwiftMove</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            {/* Form Type Toggle */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setFormType("individual")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  formType === "individual"
                    ? "bg-emerald-800 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setFormType("company")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  formType === "company"
                    ? "bg-emerald-800 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Company
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Type your message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-emerald-800 text-white font-bold py-4 rounded-lg hover:bg-emerald-700 transition shadow-lg hover:shadow-xl"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
