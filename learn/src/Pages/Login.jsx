import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (email && password) {
      navigate("/account"); 
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
          />

          <button
            type="submit"
            className="w-full bg-[#39FF14] text-black font-semibold py-2 rounded-lg hover:opacity-90 hover:bg-[#0B0B0B] hover:text-[white] transition"
          >
            Login
          </button>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#39FF14] font-semibold hover:text-[#0B0B0B]">
              Register
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
}

export default Login;
