import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (name && email && password) {
      localStorage.setItem("username", name);
      localStorage.setItem("email", email);
      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#39FF14]"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#39FF14]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#39FF14]"
          />

          <button className="w-full bg-[#39FF14] text-black py-2 rounded-lg font-semibold hover:bg-[#0B0B0B] hover:text-white">
            Create Account
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#39FF14] font-semibold hover:text-[#0B0B0B]">
              Login
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
}

export default Register;
