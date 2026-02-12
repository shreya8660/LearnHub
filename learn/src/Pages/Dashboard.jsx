import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || "Sherry"
  );

  const navigate = useNavigate();

  // 🔥 ADDED: Sync username if changed
  useEffect(() => {
    const syncUser = () => {
      setUsername(localStorage.getItem("username") || "Sherry");
    };

    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("enrolledCourses");
    const storedCourses = storedData ? JSON.parse(storedData) : [];
    setCourses(storedCourses);
  }, []);

  const completedCourses = courses.filter((course) => {
    const progressData = localStorage.getItem(`progress-${course.id}`);
    const progress = progressData ? JSON.parse(progressData) : [];
    return progress.length === 3;
  });

  const overallProgress =
    courses.length === 0
      ? 0
      : Math.round(
          (completedCourses.length / courses.length) * 100
        );

  return (
    <section className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 text-[#39FF14]">
          Dashboard
        </h2>

        <ul className="space-y-4 font-semibold">
          <li className="cursor-pointer hover:text-[#39FF14]">
            Overview
          </li>
          <li className="cursor-pointer hover:text-[#39FF14]">
            My Courses
          </li>
          <li className="cursor-pointer hover:text-[#39FF14]">
            Progress
          </li>
          <li>
            <Link
              to="/settings"
              className="cursor-pointer hover:text-[#39FF14]"
            >
              Settings
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* 🔥 UPDATED: Dynamic Username */}
        <h1 className="text-3xl font-bold mb-8">
          Welcome back, {username} 👋
        </h1>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Enrolled Courses</h3>
            <p className="text-2xl font-bold text-[#39FF14] mt-2">
              {courses.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Completed Courses</h3>
            <p className="text-2xl font-bold text-[#39FF14] mt-2">
              {completedCourses.length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Certificates</h3>
            <p className="text-2xl font-bold text-[#39FF14] mt-2">
              {completedCourses.length}
            </p>
          </div>

        </div>

        {/* My Enrolled Courses */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h3 className="font-semibold mb-4">
            My Enrolled Courses
          </h3>

          {courses.length === 0 ? (
            <p className="text-gray-500">
              No courses enrolled yet.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {courses.map((course) => {
                const progress =
                  JSON.parse(
                    localStorage.getItem(`progress-${course.id}`)
                  ) || [];

                const percent = Math.round(
                  (progress.length / 3) * 100
                );

                return (
                  <div
                    key={course.id}
                    className="bg-green-50 p-4 rounded-lg shadow"
                  >
                    <h4 className="font-bold text-gray-800">
                      {course.title}
                    </h4>

                    <p className="text-sm text-gray-600 mb-2">
                      {course.duration}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                      <div
                        className="bg-[#39FF14] h-2 rounded-full"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>

                    <p className="text-sm font-semibold mb-2">
                      {percent}% Completed
                    </p>

                    <button
                      onClick={() =>
                        navigate(`/course/${course.id}`)
                      }
                      className="bg-black text-[#39FF14] px-3 py-1 rounded text-sm"
                    >
                      Open Course
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Overall Progress */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h3 className="font-semibold mb-4">
            Overall Progress
          </h3>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-[#39FF14] h-4 rounded-full"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>

          <p className="mt-2 text-[#39FF14] font-bold">
            {overallProgress}% Completed
          </p>
        </div>

      </div>
    </section>
  );
}

export default Dashboard;
