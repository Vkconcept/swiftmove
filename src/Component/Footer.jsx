import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">SwiftMove</h3>
          <p className="text-gray-400 mb-4">
            Delivering reliable logistics solutions that connect businesses,
            streamline trade, and drive growth globally.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li
              className="hover:text-green-400 transition cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="hover:text-green-400 transition cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className="hover:text-green-400 transition cursor-pointer"
              onClick={() => navigate("/services")}
            >
              Services
            </li>
            <li
              className="hover:text-green-400 transition cursor-pointer"
              onClick={() => navigate("/blog")}
            >
              Blog
            </li>
            <li
              className="hover:text-green-400 transition cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li className="hover:text-green-400 transition cursor-pointer">
              Freight Forwarding
            </li>
            <li className="hover:text-green-400 transition cursor-pointer">
              Supply Chain Management
            </li>
            <li className="hover:text-green-400 transition cursor-pointer">
              Warehousing
            </li>
            <li className="hover:text-green-400 transition cursor-pointer">
              Custom Logistics Solutions
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
          <p>Phone: 08176860084</p>
          <p>Email: sales@swiftmove.com</p>
          <p>Address: Lagos, Nigeria</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SwiftMove. All rights reserved.
      </div>
    </footer>
  );
}
