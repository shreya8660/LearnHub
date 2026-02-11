import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
          />

          <button className="w-full bg-[#39FF14] text-black font-semibold py-2 rounded-lg hover:opacity-90 hover:bg-[#0B0B0B] hover:text-[white] transition">
            Create Account
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#39FF14] font-semibold hover:text-[#0B0B0B]">
              Login
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}

export default Register;
