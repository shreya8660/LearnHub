import React, { useState } from "react";

function Account() {
  const [image, setImage] = useState(null);
  const [progress] = useState(70);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <section className="min-h-screen pt-5 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

      
        <div className="flex items-center gap-6 border-b pb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-[#39FF14] flex items-center justify-center text-2xl font-bold">
              {image ? (
                <img
                  src={image}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                "S"
              )}
            </div>

            <label className="absolute bottom-0 right-0 bg-black text-white text-xs px-2 py-1 rounded cursor-pointer">
              Edit
              <input
                type="file"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
          <h1 className="font-bold text-xl">Sherry</h1>
        </div>


        <div className="mt-8">
          <h3 className="font-semibold mb-3">Course Progress</h3>

          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-[#39FF14] h-4 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="mt-2 font-semibold text-[#39FF14]">
            {progress}% Completed
          </p>
        </div>


        <div className="mt-10">
          <h3 className="font-semibold mb-4">Enrolled Courses</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl shadow">
              Web Development
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow">
              UI/UX Design
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow">
              Data Structures
            </div>
          </div>
        </div>


        <div className="mt-10">
          <h3 className="font-semibold mb-4">Change Password</h3>

          <div className="grid gap-4 max-w-md">
            <input
              type="password"
              placeholder="Current Password"
              className="px-4 py-2 rounded-lg border"
            />
            <input
              type="password"
              placeholder="New Password"
              className="px-4 py-2 rounded-lg border"
            />
            <button className="bg-[#39FF14] text-[#0B0B0B] px-4 py-2 rounded-lg hover:bg-[#0B0B0B] hover:text-[white] transition">
              Update Password
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Account;
