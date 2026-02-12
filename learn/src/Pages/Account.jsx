import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Account() {

  const navigate = useNavigate(); // ✅ ADDED
  const [showModal, setShowModal] = useState(false); // ✅ ADDED

  const [image, setImage] = useState(
    localStorage.getItem("profileImage")
  );

  const [username, setUsername] = useState(
    localStorage.getItem("username") || "Sherry"
  );

  const [editingName, setEditingName] = useState(false);

  const [email, setEmail] = useState(
    localStorage.getItem("email") || "sherry@email.com"
  );

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const syncData = () => {
      setUsername(localStorage.getItem("username") || "Sherry");
      setEmail(localStorage.getItem("email") || "sherry@email.com");
    };

    window.addEventListener("storage", syncData);
    return () => window.removeEventListener("storage", syncData);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("enrolledCourses");
    setCourses(stored ? JSON.parse(stored) : []);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      localStorage.setItem("profileImage", reader.result);
      setImage(reader.result);
    };

    if (file) reader.readAsDataURL(file);
  };

  const saveUsername = () => {
    localStorage.setItem("username", username);
    setEditingName(false);
  };

  const saveEmail = () => {
    localStorage.setItem("email", email);
  };

  // 🔥 Modified only inside logic (no structure removed)
  const handleDeleteAccount = () => {
    localStorage.clear();
    navigate("/regi");
  };

  const completedCourses = courses.filter((course) => {
    const progressData = localStorage.getItem(`progress-${course.id}`);
    const progress = progressData ? JSON.parse(progressData) : [];
    return progress.length === 3;
  });

  return (
    <section className="min-h-screen bg-gray-100 pt-20 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* 👤 Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <img
              src={image || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#39FF14]"
            />
            <label className="absolute bottom-0 right-0 bg-black text-white text-xs px-3 py-1 rounded cursor-pointer">
              Edit
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex-1">
            {editingName ? (
              <div className="flex gap-2">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border px-3 py-1 rounded-lg"
                />
                <button
                  onClick={saveUsername}
                  className="bg-[#39FF14] px-3 rounded-lg"
                >
                  Save
                </button>
              </div>
            ) : (
              <h1
                className="text-3xl font-bold cursor-pointer"
                onClick={() => setEditingName(true)}
              >
                {username}
              </h1>
            )}

            <p className="text-gray-500 mt-1">
              Student • LearnHub Member
            </p>

            <div className="flex gap-8 mt-6">
              <div>
                <p className="text-2xl font-bold text-[#39FF14]">
                  {courses.length}
                </p>
                <p className="text-sm text-gray-500">Courses</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#39FF14]">
                  {completedCourses.length}
                </p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* 📧 Email Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Email Information</h2>
          <div className="flex gap-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border px-4 py-2 rounded-lg"
            />
            <button
              onClick={saveEmail}
              className="bg-[#39FF14] px-5 rounded-lg"
            >
              Update
            </button>
          </div>
        </div>

        {/* 🏆 Badge Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Achievements</h2>
          <div className="flex gap-6 flex-wrap">
            {completedCourses.length > 0 && (
              <div className="bg-green-50 px-5 py-3 rounded-xl shadow text-center">
                🏆 Course Master
              </div>
            )}
            {courses.length >= 3 && (
              <div className="bg-green-50 px-5 py-3 rounded-xl shadow text-center">
                🎓 Dedicated Learner
              </div>
            )}
            {courses.length === 0 && (
              <p className="text-gray-500">
                No badges earned yet.
              </p>
            )}
          </div>
        </div>

        {/* 📊 Personal Analytics */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Personal Analytics</h2>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-[#39FF14] h-4 rounded-full"
              style={{
                width:
                  courses.length === 0
                    ? "0%"
                    : `${Math.round(
                        (completedCourses.length /
                          courses.length) *
                          100
                      )}%`
              }}
            ></div>
          </div>
        </div>

        {/* 🚨 Danger Zone */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-200">
          <h2 className="text-xl font-semibold mb-4 text-red-500">
            Danger Zone
          </h2>

          {/* Open modal instead */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:opacity-90"
          >
            Delete Account
          </button>
        </div>

      </div>

      {/* ✅ CUSTOM MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center">
            <h3 className="text-xl font-bold text-red-500 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to permanently delete your account?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-5 py-2 rounded-lg bg-red-500 text-white hover:opacity-90"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Account;
