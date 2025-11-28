import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Services from "./Component/Service";
import Blog from "./Component/Blog";
import Footer from "./Component/Footer";
import LogisticsQuoteForm from "./Component/LogisticsQuoteForm";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/quote" element={<LogisticsQuoteForm />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
