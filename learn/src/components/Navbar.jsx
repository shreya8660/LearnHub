import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#39FF14] shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-black">
        LearnHub
      </h1>

      <ul className="flex gap-8 font-semibold">
        <Link to="/" className="hover:text-white cursor-pointer">
          Home
        </Link>

        <Link to="/courses" className="hover:text-white cursor-pointer">
          Courses
        </Link>

        <Link to="/dashboard" className="hover:text-white cursor-pointer">
          Dashboard
        </Link>

        <Link to="/blog" className="hover:text-white cursor-pointer">
        Blog
        </Link>

        <Link to="/account" className="hover:text-white cursor-pointer">
          Account
        </Link>
      </ul>


      <Link
        to="/login"
        className="bg-black text-[#39FF14] px-5 py-2 rounded-lg hover:bg-white transition">
        Login
     </Link>

    </nav>
  );
}

export default Navbar;
