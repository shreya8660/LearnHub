import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData } from "../data/coursesData";

function Course() {

  
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEnrolled, setIsEnrolled] = useState(false);
  const [completedModules, setCompletedModules] = useState([]);

  // 🔍 Find course
  const course = coursesData.find(
    (c) => c.id === parseInt(id)
  );

  // 🔒 Check enrollment (SAFE)
  useEffect(() => {
    const storedData = localStorage.getItem("enrolledCourses");
    const enrolled = storedData ? JSON.parse(storedData) : [];

    const found = enrolled.find(
      (item) => item.id === parseInt(id)
    );

    if (found) {
      setIsEnrolled(true);
    }
  }, [id]);

  // 📊 Load saved progress (SAFE)
  useEffect(() => {
    const progressData = localStorage.getItem(`progress-${id}`);
    const savedProgress = progressData ? JSON.parse(progressData) : [];

    setCompletedModules(savedProgress);
  }, [id]);

  // ✅ Toggle module completion
  const toggleModule = (moduleIndex) => {
    let updated;

    if (completedModules.includes(moduleIndex)) {
      updated = completedModules.filter((m) => m !== moduleIndex);
    } else {
      updated = [...completedModules, moduleIndex];
    }

    setCompletedModules(updated);

    localStorage.setItem(
      `progress-${id}`,
      JSON.stringify(updated)
    );
  };

 
  if (!course) {
    return (
      <div className="pt-24 text-center text-red-500">
        Course not found
      </div>
    );
  }

  
  if (!isEnrolled) {
    return (
      <div className="pt-24 text-center text-red-500">
        🔒 You are not enrolled in this course.
      </div>
    );
  }

  
  const modules = [
    "Introduction",
    "Core Concepts",
    "Practical Project"
  ];

  const progressPercent =
    (completedModules.length / modules.length) * 100;

  return (
    <section className="min-h-screen pt-24 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

        
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-4 text-[#39FF14] font-semibold hover:text-[#0B0B0B]"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold mb-4">
          {course.title}
        </h1>

        <p className="text-gray-600 mb-6">
          {course.description}
        </p>

        
        <div className="mb-6">
          <video
            controls
            className="w-full rounded-lg shadow"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
        </div>

       
        <div className="mb-6">
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-[#39FF14] h-4 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <p className="mt-2 font-semibold text-[#39FF14]">
            {Math.round(progressPercent)}% Completed
          </p>
        </div>

        
        <div className="space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-green-50 p-4 rounded-lg flex justify-between items-center"
            >
              <span>{module}</span>

              <button
                onClick={() => toggleModule(index)}
                className={`px-3 py-1 rounded text-sm ${
                  completedModules.includes(index)
                    ? "bg-black text-white"
                    : "bg-[#39FF14] text-black"
                }`}
              >
                {completedModules.includes(index)
                  ? "Completed"
                  : "Mark Complete"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Course;
