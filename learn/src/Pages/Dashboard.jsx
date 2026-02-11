import React from "react";

function Dashboard() {
  return (
    <section className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 text-[#39FF14]">Dashboard</h2>

        <ul className="space-y-4 font-semibold">
          <li className="cursor-pointer hover:text-[#39FF14]">Overview</li>
          <li className="cursor-pointer hover:text-[#39FF14]">My Courses</li>
          <li className="cursor-pointer hover:text-[#39FF14]">Progress</li>
          <li className="cursor-pointer hover:text-[#39FF14]">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Welcome */}
        <h1 className="text-3xl font-bold mb-8">
          Welcome back, Sherry 👋
        </h1>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Enrolled Courses</h3>
            <p className="text-2xl font-bold text-[#39FF14] mt-2">3</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Completed</h3>
            <p className="text-2xl font-bold text-[#39FF14] mt-2">2</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Certificates</h3>
            <p className="text-2xl font-bold text-[#39FF14] mt-2">1</p>
          </div>

        </div>

        {/* Progress Section */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h3 className="font-semibold mb-4">Overall Progress</h3>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-[#39FF14] h-4 rounded-full transition-all duration-700"
              style={{ width: "70%" }}
            ></div>
          </div>

          <p className="mt-2 text-[#39FF14] font-bold">70% Completed</p>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-2 text-gray-600">
            <li>✔ Completed UI/UX Module 1</li>
            <li>✔ Posted a comment on Blog</li>
            <li>✔ Started Data Structures Course</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default Dashboard;
