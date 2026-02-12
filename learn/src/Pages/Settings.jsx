import React, { useState } from "react";

function Settings() {
  const [preview, setPreview] = useState(
    localStorage.getItem("profileImage")
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      localStorage.setItem("profileImage", reader.result);
      setPreview(reader.result);
    };

    if (file) reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-4xl mx-auto">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">
        Account Settings ⚙
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Profile Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-6">
            Profile
          </h2>

          <div className="flex flex-col items-center">

            <div className="relative">
              <img
                src={
                  preview ||
                  "https://via.placeholder.com/150"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#39FF14]"
              />

              {/* Upload Overlay */}
              <label className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer text-xs">
                Edit
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <p className="mt-4 font-semibold text-lg">
              Sherry
            </p>

            <p className="text-gray-500 text-sm">
              Student Account
            </p>

          </div>
        </div>

        {/* Security Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-6">
            Security
          </h2>

          <div className="space-y-4">

            <div>
              <label className="block text-sm font-medium mb-2">
                Current Password
              </label>
              <input
                type="password"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-6">

            <button className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
              Cancel
            </button>

            <button className="px-5 py-2 rounded-lg bg-[#39FF14] text-black font-semibold hover:opacity-90 hover:bg-[#0B0B0B] hover:text-[white] transition">
              Save Changes
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;
