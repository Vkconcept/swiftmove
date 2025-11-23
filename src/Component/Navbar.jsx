import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Truck } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg transform rotate-45 flex items-center justify-center">
              <Truck className="w-8 h-8 text-white -rotate-45" />
            </div>
            <span className="ml-3 text-2xl font-bold text-white">
              SwiftMove
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-green-400 font-medium hover:text-green-300 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-green-400 transition"
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="text-gray-300 hover:text-green-400 transition"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-green-400 transition"
            >
              Contact
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-green-400 transition"
            >
              Services
            </Link>
            <Link
              to="/quote"
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 font-semibold rounded-full hover:from-green-500 hover:to-green-600 transition shadow-lg shadow-green-500/50"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block text-green-400 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/services"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/quote"
              className="block w-full mt-4 px-6 py-3 bg-white text-green-500 font-semibold rounded-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
