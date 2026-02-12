import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "../data/coursesData";

function Enroll() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = coursesData.find(
    (c) => c.id === parseInt(id)
  );

  const [step, setStep] = useState("form"); 
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePayment = (e) => {
    e.preventDefault();

    
    const enrolled = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    const alreadyEnrolled = enrolled.find(
      (item) => item.id === course.id
    );

    if (!alreadyEnrolled) {
      enrolled.push(course);
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
    }

    setStep("success");

    setTimeout(() => {
      navigate(`/course/${course.id}`);
    }, 1500);
  };

  if (!course) {
    return <div className="pt-24 text-center">Course not found</div>;
  }

  return (
    <section className="min-h-screen pt-24 px-6 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">

        <h2 className="text-3xl font-bold mb-4">
          Enroll in {course.title}
        </h2>

        <p className="text-[#39FF14] font-bold mb-6">
          {course.price}
        </p>

        {/* STEP 1 — USER FORM */}
        {step === "form" && (
          <form onSubmit={handleFormSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#39FF14] text-black py-2 rounded-lg hover:bg-[#0B0B0B] hover:text-white"
            >
              Proceed to Payment
            </button>
          </form>
        )}

        {/* STEP 2 — PAYMENT UI */}
        {step === "payment" && (
          <form onSubmit={handlePayment} className="space-y-4">

            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="CVV"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-[#39FF14] py-2 rounded-lg hover:bg-[#39FF14] hover:text-[#0B0B0B]"
            >
              Pay {course.price}
            </button>
          </form>
        )}

        {/* STEP 3 — SUCCESS */}
        {step === "success" && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-600">
              🎉 Payment Successful!
            </h3>
            <p className="mt-2">
              Redirecting to Course...
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Enroll;
