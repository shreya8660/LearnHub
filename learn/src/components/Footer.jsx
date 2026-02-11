import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white mt-16">

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#39FF14]">
            LearnHub
          </h2>
          <p className="mt-4 text-gray-400 text-sm">
            Empowering students with modern learning experiences.
          </p>
          <p>Developed by Shreya.V</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-[#39FF14]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 text-[#39FF14]">
            Support
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-[#39FF14]">
            Contact
          </h3>
          <p className="text-gray-400 text-sm">
            Email: support@learnhub.com
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <span className="cursor-pointer hover:text-[#39FF14]">🌐</span>
            <span className="cursor-pointer hover:text-[#39FF14]">📘</span>
            <span className="cursor-pointer hover:text-[#39FF14]">📸</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} LearnHub. All rights reserved by Shreya .V.
      </div>

    </footer>
  );
}

export default Footer;
